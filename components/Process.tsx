"use client";

export default function Process() {
    const steps = [
        { step: "01", name: "Understand", desc: "Deconstructing constraints & core problems." },
        { step: "02", name: "Architect", desc: "Designing scalable data flows & system logic." },
        { step: "03", name: "Build", desc: "Implementing clean, testable, modular code." },
        { step: "04", name: "Evaluate", desc: "Testing edge cases, relevance, & failure modes." },
        { step: "05", name: "Iterate", desc: "Refining based on real-world feedback loops." },
    ];

    return (
        <section className="bg-[#121212] text-white py-24 md:py-40 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <h3 className="text-sm text-gray-500 uppercase tracking-widest">How I Build</h3>
                </div>

                <div className="flex flex-col border-t border-white/10">
                    {steps.map((s, i) => (
                        <div key={i} className="flex flex-col md:flex-row py-12 border-b border-white/10 group hover:bg-white/5 transition-colors duration-300">
                            <div className="md:w-1/4 mb-4 md:mb-0">
                                <span className="font-mono text-gray-600 text-sm">({s.step})</span>
                            </div>
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <h4 className="text-3xl md:text-4xl font-medium">{s.name}</h4>
                            </div>
                            <div className="md:w-1/3">
                                <p className="text-lg text-gray-400 font-light">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
