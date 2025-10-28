import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Rachakonda Real Estate</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner in finding the perfect property in Hyderabad, Rangareddy, and Nalgonda.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-smooth">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-smooth">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-smooth">Services</a></li>
              <li><a href="#contact" className="hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919848774575" className="hover:text-accent transition-smooth">
                  +91 9848774575
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:rachakonda1111@gmail.com" className="hover:text-accent transition-smooth break-all">
                  rachakonda1111@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Road No 18, Vinayaka Nagar Colony, Hayathnagar, Hyderabad - 501505</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Rachakonda Real Estate. All rights reserved.</p>
          <p className="mt-2 text-sm">Managed by Rachakonda Muthyalu - Real Estate Consultant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
