import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  FaArrowRight,
  FaShoppingBag,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

import productApi from "../api/productApi";
import ProductCard from "../components/ProductCard";

function Home() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: productApi.getProducts,
  });

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="hero-left">

          <span className="hero-badge">
            ✨ New Collection 2026
          </span>

          <h1>
            Discover <span>Premium</span> Products
          </h1>

          <p>
            Upgrade your lifestyle with the latest electronics,
            fashion, accessories and everyday essentials.
            Shop premium quality products at affordable prices.
          </p>

          <div className="hero-buttons">

            <Link to="/products">
              <button className="shop-btn">
                Shop Now
                <FaArrowRight />
              </button>
            </Link>

            <Link to="/products">
              <button className="explore-btn">
                Explore
              </button>
            </Link>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <div className="icon">
                <FaShoppingBag />
              </div>

              <h2>500+</h2>

              <p>Products</p>
            </div>

            <div className="stat-card">
              <div className="icon">
                <FaUsers />
              </div>

              <h2>10K+</h2>

              <p>Customers</p>
            </div>

            <div className="stat-card">
              <div className="icon">
                <FaHeadset />
              </div>

              <h2>24/7</h2>

              <p>Support</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

       <div className="hero-right">

  <div className="circle"></div>

  <img
    src="/images/shop-banner.png"
    alt="Shopping Banner"
  />

</div>

      </section>

  

 {/* ================= NEW ARRIVALS ================= */}

<section className="new-arrivals">

  <div className="section-title">

    <div>
      <span>NEW COLLECTION</span>
      <h2>New Arrivals</h2>
    </div>

  </div>


  <div className="arrival-grid">


    <div className="arrival-card">

      <img 
      src="https://i.pinimg.com/736x/87/85/67/8785672289576ecc85406c271e55d4e0.jpg"
      alt="Product"
      />

      <h3>Premium Electronics</h3>

      <p>Latest collection</p>

    </div>



    <div className="arrival-card">

      <img 
      src="https://i.pinimg.com/736x/9e/4b/3d/9e4b3d7f5168a155944ebc2e846f761f.jpg"
      alt="Product"
      />

      <h3>Fashion Collection</h3>

      <p>Trending styles</p>

    </div>



    <div className="arrival-card">

      <img 
      src="https://i.pinimg.com/736x/6d/42/35/6d4235228de792d7434361198a4dfec3.jpg"
      alt="Product"
      />

      <h3>Smart Accessories</h3>

      <p>Modern lifestyle</p>

    </div>



    <div className="arrival-card">

      <img 
      src="https://i.pinimg.com/736x/ef/1a/ae/ef1aaed49791f418a16ffd62aa14c8df.jpg"
      alt="Product"
      />

      <h3>Home Essentials</h3>

      <p>Premium quality</p>

    </div>


  </div>


  <Link to="/products">

    <button className="view-all-btn">
      View All Products
    </button>

  </Link>


</section>

      {/* ================= CATEGORY ================= */}

      <section className="categories">

        <h2>Shop By Category</h2>

        <div className="category-grid">

          <div className="category-card">
            💻
            <h3>Electronics</h3>
          </div>

          <div className="category-card">
            👗
            <h3>Fashion</h3>
          </div>

          <div className="category-card">
            ⌚
            <h3>Accessories</h3>
          </div>

          <div className="category-card">
            🏠
            <h3>Home</h3>
          </div>

        </div>

      </section>


{/* ================= OFFER ================= */}

<section className="offer-banner">

  <div className="offer-left">

    <span className="sale-tag">
      🔥 Limited Time Offer
    </span>

    <h1>
      Up To <span>50% OFF</span>
    </h1>

    <h3>
      Premium Summer Collection
    </h3>

    <p>
      Discover premium fashion, electronics and accessories
      with exclusive discounts. Shop your favourites before
      the offer ends.
    </p>

    <div className="offer-points">

      <span>🚚 Free Delivery</span>
      <span>⭐ Premium Quality</span>
      <span>🔒 Secure Payment</span>

    </div>

    <Link to="/products">

      <button className="offer-btn">
        Shop Now
        <FaArrowRight/>
      </button>

    </Link>

  </div>


  <div className="offer-right">

    <img
      src="images/6.png"
      alt="Offer"
    />

  </div>

</section>

      {/* ================= WHY CHOOSE ================= */}

      <section className="why-us">

        <h2>Why Choose NexusStore?</h2>

        <div className="why-grid">

          <div>
            🚚
            <h3>Fast Delivery</h3>
            <p>Free shipping on all orders.</p>
          </div>

          <div>
            🔒
            <h3>Secure Payment</h3>
            <p>100% secure checkout.</p>
          </div>

          <div>
            ⭐
            <h3>Premium Quality</h3>
            <p>Best quality products.</p>
          </div>

          <div>
            🔄
            <h3>Easy Returns</h3>
            <p>7 days return policy.</p>
          </div>

        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter">

        <h2>Subscribe to our Newsletter</h2>

        <p>
          Get updates about new arrivals and exclusive offers.
        </p>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </section>

    </>
  );
}

export default Home;