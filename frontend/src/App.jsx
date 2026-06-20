import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills.jsx";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectsSection />
      <Contact />

      <Footer />
    </>
  );
}

export default App;