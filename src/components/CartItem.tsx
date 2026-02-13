import type { CartItem as CartItemType } from "../hooks/useCart.ts";

interface CartItemProps {
  item: CartItemType;
  onUpdateQty: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItem({ item, onUpdateQty, onRemove }: CartItemProps) {
  return (
    <div className="cart-item" data-testid={`cart-item-${item.id}`}>
      <div className="cart-item-emoji">{item.img}</div>
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <button
          className="qty-btn"
          aria-label={`Decrease quantity of ${item.name}`}
          onClick={() => onUpdateQty(item.id, item.qty - 1)}
        >
          −
        </button>
        <span className="qty-display" aria-label={`Quantity: ${item.qty}`}>
          {item.qty}
        </span>
        <button
          className="qty-btn"
          aria-label={`Increase quantity of ${item.name}`}
          onClick={() => onUpdateQty(item.id, item.qty + 1)}
        >
          +
        </button>
      </div>
      <div className="cart-item-total">
        ${(item.price * item.qty).toFixed(2)}
      </div>
      <button
        className="remove-btn"
        aria-label={`Remove ${item.name} from cart`}
        onClick={() => onRemove(item.id)}
      >
        ✕
      </button>
    </div>
  );
}
