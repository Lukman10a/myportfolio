import About from "@/components/about";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="space-y-14">
      <NavBar />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
}
