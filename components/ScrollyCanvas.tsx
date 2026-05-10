"use client";

import { useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Overlay from "./Overlay";

const FRAME_COUNT = 129;
const PRIORITY_FRAMES = 8; // Load the first 8 frames with high priority

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
    const [ready, setReady] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

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

    // 3. Render Canvas
    const render = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const safeIndex = Math.min(Math.max(Math.round(index), 0), FRAME_COUNT - 1);
        const img = imagesRef.current[safeIndex];

        if (!img || !img.complete) return;

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
    }, []);

    // 2. Progressive Image Loading
    useEffect(() => {
        let loadedCount = 0;

        const loadImage = (i: number): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = `/sequence/frame-${i.toString().padStart(3, '0')}.webp`;
                img.onload = () => {
                    imagesRef.current[i] = img;
                    loadedCount++;
                    setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));

                    // Show the canvas as soon as the first frame is ready
                    if (i === 0) {
                        setReady(true);
                        render(0);
                    }
                    resolve();
                };
                img.onerror = () => resolve(); // Skip broken frames
            });
        };

        const loadAll = async () => {
            // Phase 1: Load first N frames with high priority (sequential for speed)
            for (let i = 0; i < PRIORITY_FRAMES; i++) {
                await loadImage(i);
            }

            // Phase 2: Load remaining frames in parallel batches
            const BATCH_SIZE = 12;
            for (let start = PRIORITY_FRAMES; start < FRAME_COUNT; start += BATCH_SIZE) {
                const batch = [];
                for (let i = start; i < Math.min(start + BATCH_SIZE, FRAME_COUNT); i++) {
                    batch.push(loadImage(i));
                }
                await Promise.all(batch);
            }
        };

        loadAll();
    }, [render]);

    // 4. Update on Scroll
    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(latest);
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => render(currentIndex.get());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentIndex, render]);

    return (
        <div ref={containerRef} className="h-[250vh] md:h-[500vh] relative bg-[#121212]">
            {/* Use 100dvh for better mobile viewport support */}
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Pass the SMOOTH progress to the overlay so text matches the canvas speed */}
                <Overlay scrollYProgress={smoothProgress} />

                {/* Loading Indicator */}
                {!ready && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-cyan-500 transition-all duration-200 ease-out rounded-full"
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <span className="text-white/30 text-xs font-mono tracking-widest">
                            {loadProgress}%
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
