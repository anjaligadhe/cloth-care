import { Truck, Shield, Sparkles, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Made from the finest organic cotton and natural dyes that get softer with every wash.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free carbon-neutral delivery on all orders above ₹999 across India.",
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    description: "We stand behind our craftsmanship with a comprehensive quality guarantee.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Not satisfied? Return within 30 days for a full refund, no questions asked.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Quality You Can Trust
          </h2>
          <p className="text-muted-foreground text-lg">
            We go above and beyond to ensure every bag meets our exacting standards.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto bg-sage-light rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
