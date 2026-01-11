export default function Recognition() {
    const awards = [
        "OpenAI Academy × NxtWave Buildathon (Prefinalist)",
        "Mumbai Hacks 2025 (Finalist)",
        "ETMIS 2025: Brain Waves & Emotion Research Paper",
        "SREC Coin Design Challenge (2nd Place)"
    ];

    const certifications = [
        "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        "AWS Cloud Practitioner Essentials (Dec 2025)"
    ];

    const roles = [
        "Software Dev Intern @ Benchmarrk",
        "Full Stack Intern @ Nexoris Solutions",
        "Intl. Service Director @ Rotaract Club"
    ];

    return (
        <section className="bg-[#121212] text-white py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

                <div className="flex-1">
                    <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-12">Recognition</h3>
                    <ul className="space-y-6">
                        {awards.map((a, i) => (
                            <li key={i} className="text-xl md:text-2xl font-light text-gray-300 pb-6 border-b border-white/5 last:border-0">
                                {a}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1">
                    <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-12">Certifications</h3>
                    <ul className="space-y-6">
                        {certifications.map((c, i) => (
                            <li key={i} className="text-xl md:text-2xl font-light text-gray-300 pb-6 border-b border-white/5 last:border-0">
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1">
                    <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-12">Experience</h3>
                    <ul className="space-y-6">
                        {roles.map((r, i) => (
                            <li key={i} className="text-xl md:text-2xl font-light text-gray-300 pb-6 border-b border-white/5 last:border-0">
                                {r}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
