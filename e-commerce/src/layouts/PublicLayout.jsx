import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>

      <Navbar />

      <main style={{
        flex: 1
      }}>
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default PublicLayout;