import ProductCard from "./ProductCard";
import productBeige from "@/assets/product-tote-beige.jpg";
import productGreen from "@/assets/product-bag-green.jpg";
import productTerracotta from "@/assets/product-bag-terracotta.jpg";

const products = [
  {
    name: "Shopping Bag",
    price: 125,
    marketPrice: 180,
    image: productBeige,
    tag: "Bestseller",
  },
  {
    name: "Vegetable Bags",
    price: 85,
    marketPrice: 130,
    image: productGreen,
  },
  {
    name: "College/Office Bags",
    price: 145,
    marketPrice: 220,
    image: productTerracotta,
    tag: "Premium",
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Collection</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Handcrafted with Love
          </h2>
          <p className="text-muted-foreground text-lg">
            Each bag is carefully made by local artisans using sustainable materials 
            that are gentle on the planet.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.name} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
