import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorReporter from "@/components/ErrorReporter";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import HireMe from "@/components/HireMe";
import Footer from "@/components/Footer";
import CaseStudy from "@/pages/CaseStudy";

function Home() {
  return (
    <main className="selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <HireMe />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="dark bg-background text-foreground min-h-screen">
        <ErrorReporter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<CaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
