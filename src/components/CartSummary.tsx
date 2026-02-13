interface CartSummaryProps {
  total: number;
  onCheckout: () => void;
}

export default function CartSummary({ total, onCheckout }: CartSummaryProps) {
  return (
    <div className="cart-summary">
      <div className="cart-total" data-testid="cart-total">
        Total: <strong>${total.toFixed(2)}</strong>
      </div>
      <button className="checkout-btn" onClick={onCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}
