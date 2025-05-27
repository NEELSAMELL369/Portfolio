
import About from "./about/page";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Projects from "./projects/page";




export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
} 