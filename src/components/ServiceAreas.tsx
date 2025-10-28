import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    { name: "Hayathnagar", description: "Our office location and primary service area" },
    { name: "Rangareddy District", description: "Comprehensive coverage across the district" },
    { name: "Nalgonda District", description: "Extensive property network" },
    { name: "Greater Hyderabad", description: "Serving all major localities" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proudly serving the Hyderabad region with local expertise
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-card shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1"
            >
              <MapPin className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{area.name}</h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Office Address</h3>
              <p className="text-muted-foreground">
                Road No 18, Vinayaka Nagar Colony, Hayathnagar, Hyderabad - 501505
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
