import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../api/productApi";
import ProductCard from "../components/ProductCard";
import useDebounce from "../hooks/useDebounce";

function Products() {

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search,500);

  const {
    data: products=[],
    isLoading,
    isError,
  } = useQuery({

    queryKey:["products"],

    queryFn:async()=>{

      const response=await api.get("/products");

      return response.data;

    }

  });

  if(isLoading){

    return <h2 className="loading">Loading Products...</h2>;

  }

  if(isError){

    return <h2 className="error">Something went wrong!</h2>;

  }

  const filteredProducts=products.filter((product)=>

    product.title
    .toLowerCase()
    .includes(debouncedSearch.toLowerCase())

  );

  return(

    <section className="products-page">

      <h1 className="page-title">
        Our Products
      </h1>

      <p className="page-subtitle">
        Explore our latest collection.
      </p>

      <div className="search-box">

        <input

          type="text"

          placeholder="Search products..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

        />

      </div>

      <div className="products-grid">

        {

          filteredProducts.length>0 ?

          filteredProducts.map((product)=>(

            <ProductCard

              key={product.id}

              product={product}

            />

          ))

          :

          <h2>No Products Found</h2>

        }

      </div>

    </section>

  );

}

export default Products;