import consultantImage from "@/assets/consultant.jpg";
import { Award, Users, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={consultantImage} 
                alt="Rachakonda Muthyalu - Real Estate Consultant"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Rachakonda Muthyalu
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With years of expertise in the Hyderabad real estate market, I am dedicated to helping you find the perfect property that matches your dreams and investment goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in Hayathnagar, I specialize in properties across Rangareddy and Nalgonda districts, offering personalized consultation for plots, lands, houses, and commercial properties.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-secondary/50">
                <Award className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Experienced</h3>
                <p className="text-sm text-muted-foreground">Trusted Consultant</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary/50">
                <Users className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Client-Focused</h3>
                <p className="text-sm text-muted-foreground">Your Success First</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary/50">
                <MapPin className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Local Expert</h3>
                <p className="text-sm text-muted-foreground">Hyderabad Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
