import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";


function Navbar() {
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <header className="navbar">

      <div className="logo">
    Nexus<span>Store</span>
</div>

      <nav className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          <span>Cart ({cartCount})</span>
        </Link>

        {isAdmin ? (
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link
            className="login-btn"
            to="/login"
          >
            Login
          </Link>
        )}

      </nav>

    </header>
  );
}

export default Navbar;