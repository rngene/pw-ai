import type { Product } from "../data/products.ts";
import ProductCard from "./ProductCard.tsx";

interface ProductGridProps {
  products: Product[];
  search: string;
  onAdd: (product: Product) => void;
}

export default function ProductGrid({ products, search, onAdd }: ProductGridProps) {
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  if (filtered.length === 0) {
    return (
      <p className="no-results" role="status">
        No products found matching "{search}"
      </p>
    );
  }

  return (
    <div className="product-grid">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
