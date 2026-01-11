"use client";

import { useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";

const FRAME_COUNT = 24;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // 1. Setup Scroll Hooks
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Add physics smoothing to the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // Map scroll (0 to 1) to frame index (0 to 23)
    const currentIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // 2. Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            // Filename format: ezgif-frame-001.png to ezgif-frame-024.png
            const img = new Image();
            const filename = `ezgif-frame-${i.toString().padStart(3, "0")}.png`;
            img.src = `/sequence/${filename}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    // 3. Render Canvas
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !isLoaded || images.length === 0) return;

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
        <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
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
