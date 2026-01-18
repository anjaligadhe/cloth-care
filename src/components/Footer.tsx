import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="ClothCare Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-xl font-semibold">ClothCare</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Sustainable cloth bags crafted with love for you and the planet. 
              Every bag makes a difference.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#products" className="hover:text-background transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Tote Bags</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Shopping Bags</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Artisan Partners</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919322976564" className="hover:text-background transition-colors">+91 93229 76564</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:cloth.care14@gmail.com" className="hover:text-background transition-colors break-all">cloth.care14@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 ClothCare. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
