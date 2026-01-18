import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroBags from "@/assets/hero-bags.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBags}
          alt="Sustainable cloth bags collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10 px-4 md:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sage-light rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">100% Sustainable & Eco-Friendly</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Carry Your World,{" "}
            <span className="text-primary">Care for Ours</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Premium handcrafted cloth bags made from organic cotton and natural fibers. 
            Beautiful, durable, and designed to replace single-use plastic forever.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Explore Collection
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">50K+</p>
              <p className="text-sm text-muted-foreground">Bags Sold</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Organic Cotton</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">Zero</p>
              <p className="text-sm text-muted-foreground">Plastic Used</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
