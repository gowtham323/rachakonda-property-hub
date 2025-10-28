import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-property.jpg";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Rachakonda Real Estate
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
          Your Trusted Real Estate Consultant in Hyderabad
        </p>
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
          Specializing in Plots, Lands, Houses & Properties across Rangareddy & Nalgonda
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-elegant transition-smooth"
            onClick={scrollToContact}
          >
            Get in Touch
          </Button>
          <a href="tel:+919848774575">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8 py-6 text-lg transition-smooth"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
          <a href="tel:+919848774575" className="flex items-center gap-2 hover:text-accent transition-smooth">
            <Phone className="h-5 w-5" />
            <span>+91 9848774575</span>
          </a>
          <a href="mailto:rachakonda1111@gmail.com" className="flex items-center gap-2 hover:text-accent transition-smooth">
            <Mail className="h-5 w-5" />
            <span>rachakonda1111@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
