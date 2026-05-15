function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "1rem",
        borderRadius: "10px",
        width: "220px",
      }}
    >
      <img src={product.image} alt={product.name} width="200" />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;