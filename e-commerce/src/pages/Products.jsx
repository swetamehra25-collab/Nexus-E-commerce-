import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import productApi from "../api/productApi";
import ProductCard from "../components/ProductCard";
import useDebounce from "../hooks/useDebounce";


function Products() {


const [search, setSearch] = useState("");

const [category, setCategory] = useState("all");


const debouncedSearch = useDebounce(search,500);



const {
data: products = [],
isLoading,
isError,

} = useQuery({

queryKey:["products"],

queryFn: productApi.getProducts,

});




if(isLoading){

return (

<h2>
Loading Products...
</h2>

);

}



if(isError){

return (

<h2>
Something went wrong!
</h2>

);

}






const filteredProducts = products.filter((product)=>{


const searchMatch = product.title

.toLowerCase()

.includes(
debouncedSearch.toLowerCase()
);



const categoryMatch =

category === "all" ||

product.category
.toLowerCase()
.includes(category);



return searchMatch && categoryMatch;



});






return (

<>


<section className="products-hero">


<span className="hero-tag">

✨ Premium Collection

</span>



<h1>

Discover Amazing

<span> Products</span>

</h1>



<p>

Browse our latest premium collection of fashion,
electronics, accessories and home essentials.

</p>


</section>








<section className="products-page">



<div className="products-top">


<div>


<h2>

All Products

</h2>



<p>

{filteredProducts.length} Products Available

</p>


</div>




<div className="search-box">


<input

type="text"

placeholder="🔍 Search products..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>



</div>








<div className="category-filter">


<button

className={category==="all" ? "active":""}

onClick={()=>setCategory("all")}

>

All

</button>





<button

className={category==="groceries" ? "active":""}

onClick={()=>setCategory("groceries")}

>

Groceries

</button>





<button

className={category==="laptops" ? "active":""}

onClick={()=>setCategory("laptops")}

>

Laptops

</button>





<button

className={category==="beauty" ? "active":""}

onClick={()=>setCategory("beauty")}

>

Beauty

</button>





<button

className={category==="furniture" ? "active":""}

onClick={()=>setCategory("furniture")}

>

Furniture

</button>





<button

className={category==="mens-watches" ? "active":""}

onClick={()=>setCategory("mens-watches")}

>

Men Watches

</button>



</div>









<div className="products-grid">


{

filteredProducts.length > 0 ? (


filteredProducts.map((product)=>(


<ProductCard

key={product.id}

product={product}

/>


))


):(


<div className="no-products">


<h2>

😔 No Products Found

</h2>


<p>

Try searching with another keyword.

</p>


</div>


)


}


</div>





</section>



</>

)

}



export default Products;