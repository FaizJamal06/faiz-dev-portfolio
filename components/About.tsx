"use client";

export default function About() {
    return (
        <section className="bg-[#121212] text-white py-24 md:py-40 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="text-2xl md:text-5xl font-light leading-snug text-gray-200 mb-16">
                    I’m an engineering student turned Generative AI builder with a background in everything from football and gaming to video editing and content creation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg text-gray-400 font-light leading-relaxed">
                    <p>
                        That mix gave me both technical depth and actual communication skills — I can build complex systems and explain them without putting people to sleep. I work at the intersection of backend engineering and modern AI, designing scalable applications and LLM-powered systems that solve real problems.
                    </p>
                    <p>
                        From hackathons to research to GenAI products in the wild, I’m driven by curiosity, consistency, and building things that last. Serious about code. Light-hearted about everything else.
                    </p>
                </div>
            </div>
        </section>
    );
}
