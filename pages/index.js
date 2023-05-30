import About from "@/components/about";
import NavBar from "@/components/navBar";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="sm:p-10 sm:m-4 p-4 m-2 space-y-14">
      <NavBar />
      <About />
      <Services />
    </main>
  );
}
