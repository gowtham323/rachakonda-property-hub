import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ServiceAreas />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
