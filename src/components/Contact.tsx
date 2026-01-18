import { Phone, Mail } from "lucide-react";
import ownerPhoto from "@/assets/ownerphoto.jpeg";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions? We'd love to hear from you. Reach out to our team.
            </p>
          </div>

          {/* Owner Details Card */}
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Owner Photo */}
              <div className="flex-shrink-0">
                <img
                  src={ownerPhoto}
                  alt="Anjali Sunil Gadhe"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary shadow-lg"
                />
              </div>

              {/* Owner Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-2">
                  Anjali Sunil Gadhe
                </h3>
                <p className="text-primary text-lg font-semibold mb-6">
                  Founder and CEO
                </p>
                
                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a 
                        href="tel:+919322976564" 
                        className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors"
                      >
                        +91 93229 76564
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:cloth.care14@gmail.com" 
                        className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors break-all"
                      >
                        cloth.care14@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
