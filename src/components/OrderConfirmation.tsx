interface OrderConfirmationProps {
  onContinueShopping: () => void;
}

export default function OrderConfirmation({ onContinueShopping }: OrderConfirmationProps) {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="confirmation">
      <div className="confirmation-emoji">🎉</div>
      <h2>Order Confirmed!</h2>
      <p className="order-number">Order #{orderNumber}</p>
      <p>Thank you for your purchase.</p>
      <button className="continue-btn" onClick={onContinueShopping}>
        Continue Shopping
      </button>
    </div>
  );
}
