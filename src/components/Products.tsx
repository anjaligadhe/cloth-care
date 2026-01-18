import ProductCard from "./ProductCard";
import productBeige from "@/assets/product-tote-beige.jpg";
import productGreen from "@/assets/product-bag-green.jpg";
import productTerracotta from "@/assets/product-bag-terracotta.jpg";
import productCream from "@/assets/product-bag-cream.jpg";

const products = [
  {
    name: "Classic Canvas Tote",
    price: 599,
    image: productBeige,
    tag: "Bestseller",
  },
  {
    name: "Sage Garden Bag",
    price: 749,
    image: productGreen,
  },
  {
    name: "Terracotta Market Bag",
    price: 699,
    image: productTerracotta,
    tag: "New",
  },
  {
    name: "Natural Cotton Shopper",
    price: 549,
    image: productCream,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
