"use client";

import { motion } from "framer-motion";

export default function Projects() {
    const projects: { title: string; problem: string; focus: string; link?: string; github?: string; details: string[] }[] = [
        {
            title: "Eko.aiV2",
            problem: "A real-time AI voice receptionist that books dental-clinic appointments.",
            focus: "React · Vite · Vapi.ai · Google Calendar API",
            github: "https://github.com/FaizJamal06/Eko.aiV2",
            details: [
                "Built a full-stack voice booking assistant with the Vapi Web SDK and 2 Google Calendar tools for availability checks and event creation.",
                "Enforced deterministic business rules: 30-minute slots, 09:00 to 18:00 IST, next-slot fallback on failure, and name/email confirmation before booking.",
                "Shipped a live transcription and call-state interface."
            ]
        },
        {
            title: "ClipForge",
            problem: "An agentic video automation platform that turns long-form content into short-form videos.",
            focus: "Python · FastAPI · LangGraph · PostgreSQL · Redis",
            link: "https://clipforge-eosin.vercel.app/",
            github: "https://github.com/FaizJamal06/clipforge",
            details: [
                "Designed a multi-node LangGraph architecture: transcript analysis, viral-moment detection, editing blueprints, validation, and execution.",
                "Built async FastAPI services with WebSocket monitoring, PostgreSQL persistence, and Redis state coordination.",
                "Added failure fallbacks, rate limiting, and input sanitization."
            ]
        },
        {
            title: "Project ASTRA",
            problem: "An agentic AI investigation platform for the Karnataka State Police Datathon.",
            focus: "Node.js · Zoho Catalyst · QuickML · React · D3.js",
            github: "https://github.com/Chris-debuggs/Datathon-KSP",
            details: [
                "Built a 5-stage Kannada voice pipeline (STT, translation, LLM/RAG, translation, TTS) on QuickML using GLM 4.7 and Qwen 3.6.",
                "Built a multi-agent Planner running Search, RAG, and Summary agents concurrently to fit a 30-second serverless limit on Zoho Catalyst, plus a RAG backend with a semantic query rewriter.",
                "Delivered explainable answers with clickable source citations, D3.js visualizations, and jsPDF reports."
            ]
        },
        {
            title: "SpotifyCares",
            problem: "An AI customer support agent with a measured evaluation loop.",
            focus: "Python · RAG · LLM Classification · LLM-as-Judge Evals",
            github: "https://github.com/FaizJamal06/Spotify-customer-support-bot-hiver",
            details: [
                "Built intent classification, retrieval, and grounded responses with a k-ablation study.",
                "Built an LLM-as-judge eval calibrated against human labels, plus a failure analysis of where the agent breaks."
            ]
        },
        {
            title: "Wanderlust",
            problem: "Building a production-style full-stack platform.",
            focus: "Backend Architecture · Auth · MVC · MongoDB",
            link: "https://wanderlust-eight-opal.vercel.app/",
            details: [
                "Implemented secure authentication workflows and complex MongoDB schemas.",
                "Designed scaleable MVC architecture with modular routing and session management.",
                "Enabled dynamic server-side rendering using EJS and Express.js."
            ]
        },
        {
            title: "PreMediq",
            problem: "Predicting health insurance costs using ML.",
            focus: "ML Pipelines · XGBoost · Streamlit",
            link: "https://premediq01.streamlit.app/",
            details: [
                "Built separate ML models to predict premiums based on demographic data.",
                "Optimized XGBoost hyperparameters for high accuracy prediction.",
                "Deployed a real-time interactive Streamlit dashboard for end-users."
            ]
        }
    ];

    return (
        <section className="min-h-screen bg-[#121212] text-white py-24 md:py-40 px-6 md:px-12" aria-label="Projects">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-sm md:text-base text-gray-500 uppercase tracking-widest mb-20">Projects</h3>

                <div className="flex flex-col gap-32">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group border-t border-white/20 pt-12 md:pt-16"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                                {/* Title */}
                                <div className="md:col-span-4">
                                    <h4 className="text-4xl md:text-5xl font-medium tracking-tight group-hover:text-gray-300 transition-colors mb-4">
                                        {p.title}
                                    </h4>
                                    <p className="text-sm font-mono text-cyan-500 mb-6">
                                        {p.focus}
                                    </p>
                                </div>

                                {/* Details */}
                                <div className="md:col-span-8 flex flex-col h-full pt-2">
                                    <p className="text-xl md:text-2xl font-light text-gray-200 leading-snug mb-8">
                                        {p.problem}
                                    </p>

                                    <ul className="space-y-3">
                                        {p.details.map((d, j) => (
                                            <li key={j} className="flex items-start text-gray-400 font-light text-lg">
                                                <span className="mr-3 text-white/40 mt-1.5">•</span>
                                                {d}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex gap-8">
                                        {[[p.link, "View Live"], [p.github, "GitHub"]].map(([href, label]) => href && (
                                            <a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 mt-8 text-sm font-mono text-cyan-500 hover:text-cyan-400 transition-colors group/link"
                                            >
                                                {label}
                                                <span className="inline-block transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5">↗</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
