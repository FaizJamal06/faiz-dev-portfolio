"use client";

import { useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";

const FRAME_COUNT = 129;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const isLoaded = loadedCount === FRAME_COUNT;

    // 1. Setup Scroll Hooks
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Add physics smoothing to the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.5,
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    // Map scroll (0 to 1) to frame index (0 to 128)
    const currentIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // 2. Preload Images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let count = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = `/sequence/frame-${i.toString().padStart(3, '0')}.png`;
            img.onload = () => {
                count++;
                setLoadedCount(prev => prev + 1);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // 3. Render Canvas
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || loadedCount < FRAME_COUNT || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const safeIndex = Math.min(Math.max(Math.round(index), 0), FRAME_COUNT - 1);
        const img = images[safeIndex];

        if (!img) return;

        // Canvas Resize Logic (Object-Fit: Cover)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const fw = canvas.width;
        const fh = canvas.height;
        const iw = img.width;
        const ih = img.height;

        // Calculate scale to cover
        const scale = Math.max(fw / iw, fh / ih);
        const x = (fw - iw * scale) / 2;
        const y = (fh - ih * scale) / 2;

        ctx.clearRect(0, 0, fw, fh);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    };

    // 4. Update on Scroll
    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(latest);
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) render(0);
    }, [isLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => render(currentIndex.get());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, currentIndex]);

    return (
        <div ref={containerRef} className="h-[250vh] md:h-[500vh] relative bg-[#121212]">
            {/* Use 100dvh for better mobile viewport support */}
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />
                {/* Pass the SMOOTH progress to the overlay so text matches the canvas speed */}
                <Overlay scrollYProgress={smoothProgress} />

                {/* Loading Indicator (Optional) */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                        Loading Sequence...
                    </div>
                )}
            </div>
        </div>
    );
}
