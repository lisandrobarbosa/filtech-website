import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Products from "@/components/home/Products";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
    </main>
  );
}