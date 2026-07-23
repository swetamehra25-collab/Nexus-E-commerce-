import { createBrowserRouter } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

// Public Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

// Admin Pages
import Dashboard from "../admin/Dashboard";
import AdminProducts from "../admin/Products";
import AddProduct from "../admin/AddProduct";
import EditProduct from "../admin/EditProduct";

// Auth Guard
import AuthGuard from "../components/AuthGuard";

const router = createBrowserRouter([
  {
    path: "/",

    element: <PublicLayout />,

    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: "products",
        element: <Products />
      },

      {
        path: "products/:id",
        element: <ProductDetails />
      },

      {
        path: "cart",
        element: <Cart />
      },

      {
        path: "login",
        element: <Login />
      }
    ]
  },

  {
    path: "/admin",

    element: (
      <AuthGuard>
        <AdminLayout />
      </AuthGuard>
    ),

    children: [
      {
        index: true,
        element: <Dashboard />
      },

      {
        path: "products",
        element: <AdminProducts />
      },

      {
        path: "add-product",
        element: <AddProduct />
      },

      // ✅ New Route
      {
        path: "edit-product/:id",
        element: <EditProduct />
      }
    ]
  }
]);

export default router;