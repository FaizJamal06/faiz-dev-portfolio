"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Parallax transforms
    // Section 1: Fades out quickly
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2: Fades in/out mid-way
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

    // Section 3: Fades in towards end
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.7, 0.9], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.9], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center z-10 w-full h-full">

            {/* Section 1: Name and Title */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute text-center px-4 w-full"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mix-blend-difference">
                    Faiz.
                </h1>
                <p className="mt-4 text-lg md:text-xl tracking-widest text-gray-400 uppercase">
                    AI Engineer & Full-Stack Developer
                </p>
            </motion.div>

            {/* Section 2: Intro Statement */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute w-full px-6 md:w-auto md:left-[10%] md:px-0 text-center md:text-left max-w-lg"
            >
                <h2 className="text-3xl md:text-6xl font-semibold text-white leading-tight">
                    Building intelligent <br />
                    <span className="text-cyan-500">AI systems.</span>
                </h2>
            </motion.div>

            {/* Section 3: Closing Statement */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute w-full px-6 md:w-auto md:right-[10%] md:px-0 text-center md:text-right max-w-lg"
            >
                <h2 className="text-3xl md:text-6xl font-semibold text-white leading-tight">
                    Scalable Full-Stack <br />
                    <span className="text-cyan-500">Solutions.</span>
                </h2>
            </motion.div>

        </div>
    );
}
