import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Products from "@/components/home/Products";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Products />

      <Gallery />

      <Contact />
      
      <Footer />
    </main>
  );
}