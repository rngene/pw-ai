export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 79.99, category: "Electronics", img: "🎧" },
  { id: 2, name: "Running Shoes", price: 124.99, category: "Footwear", img: "👟" },
  { id: 3, name: "Coffee Maker", price: 49.99, category: "Kitchen", img: "☕" },
  { id: 4, name: "Backpack", price: 59.99, category: "Accessories", img: "🎒" },
  { id: 5, name: "Desk Lamp", price: 34.99, category: "Home Office", img: "💡" },
  { id: 6, name: "Water Bottle", price: 19.99, category: "Fitness", img: "🧴" },
];
