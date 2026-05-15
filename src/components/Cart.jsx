import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state) => state.cart.cart
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="section">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p style={{ marginTop: "1rem" }}>
          Cart is empty
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <h3>{item.name}</h3>

              <p>Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() =>
                  dispatch(
                    increaseQuantity(item.id)
                  )
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(
                    decreaseQuantity(item.id)
                  )
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  dispatch(
                    removeFromCart(item.id)
                  )
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h3 style={{ marginTop: "1rem" }}>
            Total: ${totalPrice}
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;