interface HeaderProps {
  itemCount: number;
  onViewCart: () => void;
  onViewShop: () => void;
  view: string;
}

export default function Header({ itemCount, onViewCart, onViewShop }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-title" onClick={onViewShop} style={{ cursor: "pointer" }}>
        Demo Store
      </h1>
      <button
        className="cart-button"
        aria-label="View cart"
        onClick={onViewCart}
      >
        🛒 Cart
        {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
      </button>
    </header>
  );
}
