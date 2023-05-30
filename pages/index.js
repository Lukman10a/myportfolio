import About from "@/components/about";
import NavBar from "@/components/navBar";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="p-10 m-4 space-y-14">
      <NavBar />
      <About />
      <Services />
    </main>
  );
}
