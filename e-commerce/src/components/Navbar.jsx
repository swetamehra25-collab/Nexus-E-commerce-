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


  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      backgroundColor: "#111827",
      color: "white",
    },

    logo: {
      fontSize: "26px",
      fontWeight: "bold",
    },

    nav: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },

    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
    },

    button: {
      padding: "8px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "#ef4444",
      color: "white",
    },

    login: {
      padding: "8px 15px",
      borderRadius: "5px",
      backgroundColor: "#2563eb",
      color: "white",
      textDecoration: "none",
    }
  };


  return (
    <header style={styles.header}>

      <div style={styles.logo}>
        Nexus Store
      </div>


      <nav style={styles.nav}>

        <Link style={styles.link} to="/">
          Home
        </Link>


        <Link style={styles.link} to="/products">
          Products
        </Link>


        <Link style={styles.link} to="/cart">
          <FaShoppingCart /> Cart ({cartCount})
        </Link>


        {isAdmin ? (
          <button 
            style={styles.button} 
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link style={styles.login} to="/login">
            Login
          </Link>
        )}

      </nav>

    </header>
  );
}

export default Navbar;