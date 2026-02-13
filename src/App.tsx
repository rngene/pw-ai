import { useState } from "react";
import { PRODUCTS } from "./data/products.ts";
import type { Product } from "./data/products.ts";
import { useCart } from "./hooks/useCart.ts";
import Header from "./components/Header.tsx";
import SearchBar from "./components/SearchBar.tsx";
import ProductGrid from "./components/ProductGrid.tsx";
import CartItem from "./components/CartItem.tsx";
import CartSummary from "./components/CartSummary.tsx";
import CheckoutForm from "./components/CheckoutForm.tsx";
import OrderConfirmation from "./components/OrderConfirmation.tsx";
import "./App.css";

type View = "shop" | "cart" | "checkout" | "confirmation";

export default function App() {
  const [view, setView] = useState<View>("shop");
  const [search, setSearch] = useState("");
  const { cart, dispatch, total, itemCount } = useCart();

  const handleAdd = (product: Product) => dispatch({ type: "ADD", product });
  const handleRemove = (id: number) => dispatch({ type: "REMOVE", id });
  const handleUpdateQty = (id: number, qty: number) =>
    dispatch({ type: "UPDATE_QTY", id, qty });
  const handlePlaceOrder = () => {
    dispatch({ type: "CLEAR" });
    setView("confirmation");
  };

  return (
    <div className="app">
      <Header
        itemCount={itemCount}
        onViewCart={() => setView("cart")}
        onViewShop={() => {
          setView("shop");
          setSearch("");
        }}
        view={view}
      />
      <main className="main">
        {view === "shop" && (
          <>
            <SearchBar value={search} onChange={setSearch} />
            <ProductGrid
              products={PRODUCTS}
              search={search}
              onAdd={handleAdd}
            />
          </>
        )}

        {view === "cart" && (
          <div className="cart-view">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <div className="empty-cart" role="status">
                <p>Your cart is empty</p>
                <button className="back-link" onClick={() => setView("shop")}>
                  ← Continue Shopping
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQty={handleUpdateQty}
                    onRemove={handleRemove}
                  />
                ))}
                <CartSummary
                  total={total}
                  onCheckout={() => setView("checkout")}
                />
              </>
            )}
          </div>
        )}

        {view === "checkout" && (
          <CheckoutForm
            itemCount={itemCount}
            total={total}
            onPlaceOrder={handlePlaceOrder}
            onBack={() => setView("cart")}
          />
        )}

        {view === "confirmation" && (
          <OrderConfirmation
            onContinueShopping={() => {
              setView("shop");
              setSearch("");
            }}
          />
        )}
      </main>
    </div>
  );
}
