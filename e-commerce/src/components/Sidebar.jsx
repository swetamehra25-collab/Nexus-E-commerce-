import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
        Admin Panel
      </h2>

      <Link
        to="/admin"
        style={{
          color: "white",
          textDecoration: "none",
          padding: "10px",
          backgroundColor: "#334155",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        Dashboard
      </Link>

      <Link
        to="/admin/products"
        style={{
          color: "white",
          textDecoration: "none",
          padding: "10px",
          backgroundColor: "#334155",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        Products
      </Link>

      <Link
        to="/admin/add-product"
        style={{
          color: "white",
          textDecoration: "none",
          padding: "10px",
          backgroundColor: "#334155",
          borderRadius: "8px",
        }}
      >
        Add Product
      </Link>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        style={{
          marginTop: "auto",
          padding: "12px",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;