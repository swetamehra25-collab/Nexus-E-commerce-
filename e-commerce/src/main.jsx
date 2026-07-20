import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "./context/CartContext";

import "./styles/global.css";
import "./styles/components.css";
import "./styles/pages.css";
import "./styles/admin.css";

import router from "./routes/router";

import "./index.css";
import "./App.css";


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);