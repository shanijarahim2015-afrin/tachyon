import { Button } from "@/components/ui/button";
import { Code, Mail, Phone, MessageCircle, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to know more about your courses.");
    window.open(`https://wa.me/919400197100?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg overflow-hidden">
                <img src="/lovable-uploads/90087b12-3b0e-47d6-8fa8-7f5597ebb87f.png" alt="Tachyon Logo" className="h-full w-full object-cover" />
              </div>
              <div className="font-bold text-lg">Tachyon DevOps Training Centre</div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering the next generation of tech professionals with practical, 
              industry-relevant training in DevOps, React, and Cloud Computing.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="h-9 w-9 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="h-9 w-9 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="h-9 w-9 p-0">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">DevOps Masterclass</li>
              <li className="text-muted-foreground">React Development</li>
              <li className="text-muted-foreground">Cloud Computing</li>
              <li className="text-muted-foreground">Free Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                tachyoncoaching@gmail.com
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                +91 94001 97100
              </div>
              
              <Button 
                onClick={openWhatsApp}
                size="sm" 
                className="bg-green-600 hover:bg-green-700 text-white mt-4"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Tachyon DevOps Training Centre. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-primary transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;