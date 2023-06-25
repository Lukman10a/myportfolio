import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Tech from "@/components/tech";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Tech />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
