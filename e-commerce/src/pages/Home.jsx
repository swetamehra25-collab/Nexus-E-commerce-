import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import productApi from "../api/productApi";
import ProductCard from "../components/ProductCard";

function Home() {

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: productApi.getProducts,
  });

  return (
    <>

      {/* Hero Section */}

      <section className="home">

        <div className="home-content">

          <h1>
            Shop Smart,
            <span> Live Better.</span>
          </h1>

          <p>
            Discover premium electronics, fashion, accessories and much more
            at amazing prices.
          </p>

          <Link to="/products">
            <button className="shop-btn">
              Shop Now
            </button>
          </Link>

        </div>

 <div className="home-image">
  <img
    src="/images/ebanner.jpg"
    alt="Shopping Banner"
  />
</div>
<section className="offer-banner">

  <h2>🎉 Big Sale is Live!</h2>

  <p>
    Up to <strong>50% OFF</strong> on Electronics,
    Fashion & Accessories.
  </p>

</section>

      </section>

      {/* Search */}

      <section className="home-search">

        <h2>Search Products</h2>

        <input
          type="text"
          placeholder="Search your favourite products..."
        />

      </section>

      {/* Trending Products */}

      <section className="featured-products">

        <h2>🔥 Trending Products</h2>

        <div className="products-grid">

          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            products
              .slice(0, 4)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
          )}

        </div>

        <Link to="/products">
          <button className="view-all-btn">
            View All Products
          </button>
        </Link>

      </section>

      {/* Why Choose Us */}

      <section className="why-us">

        <h2>Why Choose Nexus Store?</h2>

        <div className="why-grid">

          <div>
            🚚
            <h3>Free Delivery</h3>
          </div>

          <div>
            🔒
            <h3>Secure Payment</h3>
          </div>

          <div>
            ⭐
            <h3>Premium Quality</h3>
          </div>

          <div>
            🔄
            <h3>Easy Returns</h3>
          </div>

        </div>

      </section>

    </>
  );
}

export default Home;