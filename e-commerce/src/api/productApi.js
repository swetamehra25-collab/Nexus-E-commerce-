const BASE_URL = "http://localhost:3000/products";

const productApi = {

  // Get All Products
  getProducts: async () => {
    const res = await fetch(BASE_URL);
    return res.json();
  },

  // Add Product
  addProduct: async (product) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    return res.json();
  },

  // Delete Product
  deleteProduct: async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  },

  // ✅ Get Single Product
  getProductById: async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
  },

  // ✅ Update Product
  updateProduct: async (product) => {
    const res = await fetch(`${BASE_URL}/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    return res.json();
  },

};

export default productApi;