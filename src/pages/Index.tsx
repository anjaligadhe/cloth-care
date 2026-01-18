import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Benefits />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
