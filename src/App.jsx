import { useState, useEffect } from "react";
import useActiveSection from "./hooks/useActiveSection";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const { activeSection, scrollTo } = useActiveSection();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-screen relative">
      <div className="bg-[#0b0f19] text-slate-200 min-h-screen font-sans overflow-x-hidden">
        
        {/* Replace BackgroundGradients with Particles */}
        <Particles
          particleCount={300}
          particleSpread={10}
          speed={0.3}
          particleColors={['#3b82f6', '#14b8a6', '#06b6d4']}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={true}
          particleBaseSize={200}
          cameraDistance={20}
        />

        <Navbar activeSection={activeSection} scrollTo={scrollTo} />

        <main className="pt-16 relative z-10"> {/* Ensure content stays above particles */}
          <Hero scrollTo={scrollTo} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}