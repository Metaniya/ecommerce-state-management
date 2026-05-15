import useCartStore from "../zustand/cartStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid gray",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h3>{item.name}</h3>

              <p>Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>

              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;