import { Home, LandPlot, Building2, Key } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: LandPlot,
      title: "Residential Plots",
      description: "Find the perfect plot to build your dream home in prime locations across Hyderabad."
    },
    {
      icon: Home,
      title: "Houses & Villas",
      description: "Discover ready-to-move-in houses and luxurious villas that suit your lifestyle."
    },
    {
      icon: Building2,
      title: "Agricultural Land",
      description: "Investment opportunities in agricultural and farmland properties in Nalgonda and Rangareddy."
    },
    {
      icon: Key,
      title: "Property Consultation",
      description: "Expert guidance on buying, selling, and investing in real estate with complete transparency."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border/50 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 bg-card"
            >
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
