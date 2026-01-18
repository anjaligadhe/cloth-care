import { Leaf, Heart, Recycle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Born from a Simple Belief
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ClothCare started in a small studio with a big dream — to eliminate single-use plastic bags 
              from everyday life. We believed that sustainable choices shouldn't mean compromising on 
              style or quality.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Today, we partner with local artisan communities to create beautiful, durable cloth bags 
              that you'll be proud to carry for years to come.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="w-12 h-12 mx-auto bg-sage-light rounded-full flex items-center justify-center mb-3">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-sm text-foreground">Eco-Friendly</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="w-12 h-12 mx-auto bg-sage-light rounded-full flex items-center justify-center mb-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-sm text-foreground">Handmade</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="w-12 h-12 mx-auto bg-sage-light rounded-full flex items-center justify-center mb-3">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-sm text-foreground">Sustainable</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-primary/10 rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="bg-background rounded-2xl p-6 shadow-lg">
                  <p className="font-display text-4xl font-bold text-primary mb-2">10,000+</p>
                  <p className="text-muted-foreground">Plastic bags replaced every month</p>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-lg">
                  <p className="font-display text-4xl font-bold text-primary mb-2">200+</p>
                  <p className="text-muted-foreground">Artisan families supported</p>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-lg">
                  <p className="font-display text-4xl font-bold text-primary mb-2">5 Years</p>
                  <p className="text-muted-foreground">Average bag lifespan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
