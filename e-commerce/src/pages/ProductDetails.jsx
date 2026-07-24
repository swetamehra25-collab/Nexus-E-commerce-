import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import productApi from "../api/productApi";

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { dispatch } = useContext(CartContext);

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productApi.getProductById(id),
  });

  if (isLoading) {
    return <h2 className="loading">Loading Product...</h2>;
  }

  if (isError) {
    return <h2 className="error">Something went wrong!</h2>;
  }

  function handleAddToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        quantity: 1,
      },
    });

    alert(`${product.title} added to cart`);
  }

  return (

    <section className="product-details">

      {/* LEFT IMAGE */}

      <div className="details-image">

        <div className="image-card">

          <img
            src={product.thumbnail}
            alt={product.title}
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="details-content">

        <span className="details-category">
          {product.category}
        </span>

        <h1>
          {product.title}
        </h1>

        <div className="rating-box">

          <span className="stars">
            ⭐⭐⭐⭐⭐
          </span>

          <span className="rating-number">
            {product.rating}
          </span>

        </div>

        <p className="brand">
          <strong>Brand :</strong> {product.brand}
        </p>

        <h2 className="details-price">
          ₹ {product.price}
        </h2>

        <p className="description">
          {product.description}
        </p>

        <div className="features">

          <div>🚚 Free Delivery</div>

          <div>🔄 7 Days Return</div>

          <div>🛡 Secure Payment</div>

          <div>📦 Stock : {product.stock}</div>

        </div>

        <div className="details-buttons">

          <button
            className="add-btn"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>

          <button className="buy-btn">
            Buy Now
          </button>

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            Back
          </button>

        </div>

      </div>

    </section>

  );

}

export default ProductDetails;