"use client";

import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "AI Document Assistant",
            problem: "Making large documents queryable and explainable using LLMs.",
            focus: "LangChain · LangGraph · RAG · Agent Routing",
            details: [
                "Designed a LangGraph-based reasoning workflow to dynamically route user queries based on intent.",
                "Integrated vector-based semantic search for efficient context retrieval.",
                "Improved response relevance by selecting task-specific reasoning paths during inference."
            ]
        },
        {
            title: "Wanderlust",
            problem: "Building a production-style full-stack platform.",
            focus: "Backend Architecture · Auth · MVC · MongoDB",
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
            details: [
                "Built separate ML models to predict premiums based on demographic data.",
                "Optimized XGBoost hyperparameters for high accuracy prediction.",
                "Deployed a real-time interactive Streamlit dashboard for end-users."
            ]
        }
    ];

    return (
        <section className="min-h-screen bg-[#121212] text-white py-24 md:py-40 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-sm md:text-base text-gray-500 uppercase tracking-widest mb-20">Selected Work</h3>

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
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
