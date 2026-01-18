import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  tag?: string;
}

const ProductCard = ({ name, price, image, tag }: ProductCardProps) => {
  return (
    <div className="card-product group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {tag && (
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {tag}
          </span>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-primary">₹{price}</p>
          <Button variant="default" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
