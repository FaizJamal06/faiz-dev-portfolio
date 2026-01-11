import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />

      {/* Editorial Content Flow */}
      <Projects />
      <About />
      <Recognition />
      <Contact />
    </main>
  );
}
