import useCartStore from "../zustand/cartStore";

function ProductCard({ product }) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;