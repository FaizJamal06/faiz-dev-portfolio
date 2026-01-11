"use client";

export default function About() {
    return (
        <section className="bg-[#121212] text-white py-24 md:py-40 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="text-2xl md:text-5xl font-light leading-snug text-gray-200 mb-16">
                    I started as an Engineering Student, but my curiosity quickly pulled me towards the chaotic, rapidly evolving world of Generative AI.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg text-gray-400 font-light leading-relaxed">
                    <p>
                        I don't just write code; I design systems. Whether it's architecting a backend-heavy application or finetuning LLMs for specific reasoning tasks, I thrive in the intersection of traditional engineering stability and modern AI capabilities.
                    </p>
                    <p>
                        My journey is defined by constant experimentation—from winning hackathons to publishing research. I believe in consistency, deep work, and the long-term compounding of knowledge. I'm not here to follow trends, but to build useful, enduring software.
                    </p>
                </div>
            </div>
        </section>
    );
}
