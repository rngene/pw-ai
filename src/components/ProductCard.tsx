import { useState } from "react";
import type { Product } from "../data/products.ts";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product-card" data-testid={`product-${product.id}`}>
      <div className="product-emoji">{product.img}</div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button
        className={`add-to-cart-btn ${added ? "added" : ""}`}
        aria-label={`Add ${product.name} to cart`}
        onClick={handleAdd}
      >
        {added ? "✓ Added!" : "Add to Cart"}
      </button>
    </div>
  );
}
