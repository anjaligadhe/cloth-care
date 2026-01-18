import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    product: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const products = [
    "Shopping Bag - ₹125",
    "Vegetable Bags - ₹85",
    "College/Office Bags - ₹145",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductChange = (value: string) => {
    setFormData({
      ...formData,
      product: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate form
    if (!formData.name || !formData.email || !formData.mobile || !formData.product || !formData.address) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Mobile validation (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile.replace(/\D/g, ""))) {
      setError("Please enter a valid 10-digit mobile number");
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration (optional - for automatic email sending)
      // To enable EmailJS, sign up at https://www.emailjs.com/ and configure:
      // 1. Create a service (Gmail, Outlook, etc.)
      // 2. Create an email template
      // 3. Get your Service ID, Template ID, and Public Key
      // 4. Replace the placeholder values below
      
      const serviceId = process.env.VITE_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY || "";

      // If EmailJS is configured, use it
      if (serviceId && templateId && publicKey) {
        const templateParams = {
          to_email: "cloth.care14@gmail.com",
          customer_name: formData.name,
          customer_email: formData.email,
          customer_mobile: formData.mobile,
          product_details: formData.product,
          customer_address: formData.address,
          message: formData.message || "No additional message",
          reply_to: formData.email,
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Fallback: Use mailto link (works immediately without setup)
        const subject = encodeURIComponent(`New Order - ${formData.product}`);
        const body = encodeURIComponent(
          `Customer Name: ${formData.name}\n\n` +
          `Email: ${formData.email}\n\n` +
          `Mobile: ${formData.mobile}\n\n` +
          `Product: ${formData.product}\n\n` +
          `Delivery Address: ${formData.address}\n\n` +
          `Additional Message: ${formData.message || "No additional message"}`
        );
        window.location.href = `mailto:cloth.care14@gmail.com?subject=${subject}&body=${body}`;
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        product: "",
        address: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Email sending failed:", err);
      // Fallback: Create mailto link if EmailJS fails
      const subject = encodeURIComponent(`New Order - ${formData.product}`);
      const body = encodeURIComponent(
        `Customer Name: ${formData.name}\n\n` +
        `Email: ${formData.email}\n\n` +
        `Mobile: ${formData.mobile}\n\n` +
        `Product: ${formData.product}\n\n` +
        `Delivery Address: ${formData.address}\n\n` +
        `Additional Message: ${formData.message || "No additional message"}`
      );
      window.location.href = `mailto:cloth.care14@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="order" className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Order Submitted Successfully!
              </h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your order! We have received your details and will contact you shortly.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="hero"
                size="lg"
              >
                Place Another Order
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="section-padding bg-background">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Order Now</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Place Your Order
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill in your details below and we'll get back to you soon!
            </p>
          </div>

          {/* Order Form */}
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <Label htmlFor="mobile">
                  Mobile Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  required
                  className="w-full"
                />
              </div>

              {/* Product Selection */}
              <div className="space-y-2">
                <Label htmlFor="product">
                  Select Product <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.product} onValueChange={handleProductChange} required>
                  <SelectTrigger id="product" className="w-full">
                    <SelectValue placeholder="Choose a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address">
                  Delivery Address <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="Enter your complete delivery address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full"
                />
              </div>

              {/* Additional Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any special instructions or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Submit Order
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our terms and conditions. We'll contact you shortly to confirm your order.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
