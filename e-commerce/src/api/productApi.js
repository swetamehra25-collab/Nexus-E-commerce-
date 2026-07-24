const BASE_URL = "https://dummyjson.com/products";


const productApi = {


getProducts: async () => {

const res = await fetch(`${BASE_URL}?limit=100`);

if(!res.ok){
throw new Error("Failed to fetch products");
}

const data = await res.json();

return data.products;

},



getProductById: async (id) => {

const res = await fetch(`${BASE_URL}/${id}`);

if(!res.ok){
throw new Error("Failed to fetch product");
}

return res.json();

},



addProduct: async(product)=>{

const res = await fetch(`${BASE_URL}/add`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(product)

});


return res.json();

},



deleteProduct: async(id)=>{

const res = await fetch(`${BASE_URL}/${id}`,{

method:"DELETE"

});


return res.json();

},



updateProduct: async(product)=>{

const res = await fetch(`${BASE_URL}/${product.id}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(product)

});


return res.json();

}


};


export default productApi;