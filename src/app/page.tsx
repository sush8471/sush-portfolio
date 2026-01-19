import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import HireMe from "@/components/HireMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Testimonials />
      <HireMe />
      <Footer />
    </main>
  );
}