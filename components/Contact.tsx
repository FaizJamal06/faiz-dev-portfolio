export default function Contact() {
    return (
        <footer className="bg-[#121212] text-white py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

                <div>
                    <p className="text-gray-500 uppercase tracking-widest mb-8">Next Steps</p>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tight max-w-2xl leading-tight">
                I’m always open to conversations around AI, engineering, and meaningful collaboration.
                    </h2>
                    <div className="mt-8">
                        <a 
                            href="/Faiz_Jamal_Resume.pdf" 
                            download="Faiz_Jamal_Resume.pdf"
                            className="inline-block px-8 py-3 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-8">
                    <a href="mailto:faizjamal1306@gmail.com" className="text-2xl md:text-3xl hover:text-gray-400 transition-colors border-b border-white/20 pb-1">
                        faizjamal1306@gmail.com
                    </a>

                    <div className="flex gap-8 text-sm font-mono text-gray-500 mt-4">
                        <a href="https://linkedin.com/in/faiz-jamal" className="hover:text-white transition-colors">LINKEDIN</a>
                        <a href="https://github.com/FaizJamal06" className="hover:text-white transition-colors">GITHUB</a>
                        <span>+91 63803 33437</span>
                    </div>

                    <p className="text-xs text-gray-700 mt-12">© 2026 FAIZ ISHAK JAMAL</p>
                </div>

            </div>
        </footer>
    );
}
