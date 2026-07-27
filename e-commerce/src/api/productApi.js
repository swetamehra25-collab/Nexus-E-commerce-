const API_URL = "https://dummyjson.com/products?limit=100";

const STORAGE_KEY = "allProducts";


const productApi = {


  // GET PRODUCTS
  getProducts: async () => {


    const saved = localStorage.getItem(STORAGE_KEY);


    if(saved){

      return JSON.parse(saved);

    }



    const res = await fetch(API_URL);


    const data = await res.json();



    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(data.products)

    );



    return data.products;


  },




  // GET SINGLE PRODUCT

  getProductById: async(id)=>{


    const products = JSON.parse(

      localStorage.getItem(STORAGE_KEY) || "[]"

    );


    return products.find(

      product => product.id === Number(id)

    );


  },





  // ADD PRODUCT

  addProduct: async(product)=>{


    const products = JSON.parse(

      localStorage.getItem(STORAGE_KEY) || "[]"

    );



    const newProduct = {


      id: Date.now(),

      title: product.title,

      price: product.price,

      thumbnail: product.image,

      image: product.image


    };



    products.push(newProduct);



    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(products)

    );



    return newProduct;


  },





  // DELETE PRODUCT

  deleteProduct: async(id)=>{


    const products = JSON.parse(

      localStorage.getItem(STORAGE_KEY) || "[]"

    );



    const updatedProducts = products.filter(

      product => product.id !== Number(id)

    );



    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(updatedProducts)

    );



    return true;


  },





  // UPDATE PRODUCT

  updateProduct: async(product)=>{


    const products = JSON.parse(

      localStorage.getItem(STORAGE_KEY) || "[]"

    );



    const updated = products.map(item=>


      item.id === Number(product.id)

      ?

      product

      :

      item


    );



    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(updated)

    );



    return product;


  }



};


export default productApi;