import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Using EmailJS for completely free email sending
      const templateParams = {
        to_name: 'Rachakonda Muthyalu',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message || 'No message provided',
        reply_to: formData.email,
      };
      
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      
      console.log('Email sent successfully:', result);

      // Send auto-reply confirmation email to customer
      const confirmationParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: 'Rachakonda Real Estate',
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_message: formData.message || 'No message provided',
      };
      
      // Note: You'll need to create a second template for customer confirmation
      // For now, we'll just send the main email
      // await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      //   'customer_confirmation_template', // You'll create this template later
      //   confirmationParams,
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      // );

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: unknown) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try calling or emailing directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect property? Contact us today for a consultation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98487 74575"
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your property requirements..."
                  rows={5}
                  className="mt-2"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant transition-smooth"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:+919848774575"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-smooth group"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-smooth">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Call Us</p>
                    <p className="text-muted-foreground">+91 9848774575</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:rachakonda1111@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-smooth group"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-smooth">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email Us</p>
                    <p className="text-muted-foreground break-all">rachakonda1111@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Visit Us</p>
                    <p className="text-muted-foreground">
                      Road No 18, Vinayaka Nagar Colony<br />
                      Hayathnagar, Hyderabad - 501505
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-semibold text-foreground mb-4">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
