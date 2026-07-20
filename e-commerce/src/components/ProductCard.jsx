import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

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
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <div className="product-info">
        <span className="category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p className="price">₹{product.price}</p>

        <button
          className="cart-btn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;