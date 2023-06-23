import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
