import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>
      <h1>Products</h1>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;