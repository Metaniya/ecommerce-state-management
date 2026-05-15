import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Cart Items: {cart.length}</h1>

      <Home addToCart={addToCart} />
    </div>
  );
}

export default App;