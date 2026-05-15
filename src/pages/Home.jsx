import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="section">
      <h1 style={{ marginBottom: "1rem" }}>
        Products
      </h1>

      <div className="products-grid">
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