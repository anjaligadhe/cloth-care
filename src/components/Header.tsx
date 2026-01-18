import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="ClothCare Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="font-display text-xl font-semibold text-foreground">ClothCare</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Products
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Our Story
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Why Choose Us
            </a>
            <a href="#order" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Order Now
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#order">
              <Button variant="hero" size="lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Order Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <nav className="flex flex-col py-4 px-4">
              <a href="#products" className="py-3 text-muted-foreground hover:text-foreground transition-colors font-medium">
                Products
              </a>
              <a href="#about" className="py-3 text-muted-foreground hover:text-foreground transition-colors font-medium">
                Our Story
              </a>
              <a href="#benefits" className="py-3 text-muted-foreground hover:text-foreground transition-colors font-medium">
                Why Choose Us
              </a>
              <a href="#order" className="py-3 text-muted-foreground hover:text-foreground transition-colors font-medium">
                Order Now
              </a>
              <a href="#contact" className="py-3 text-muted-foreground hover:text-foreground transition-colors font-medium">
                Contact
              </a>
              <div className="pt-4 flex gap-3">
                <a href="#order" className="flex-1">
                  <Button variant="hero" className="w-full">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Order Now
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
