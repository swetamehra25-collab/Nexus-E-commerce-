import {
useQuery,
useMutation,
useQueryClient
} from "@tanstack/react-query";

import { Link } from "react-router-dom";

import productApi from "../api/productApi";


function Products() {


const queryClient = useQueryClient();



const {
data = [],
isLoading
} = useQuery({

queryKey:["products"],

queryFn:productApi.getProducts

});





const deleteMutation = useMutation({

mutationFn:productApi.deleteProduct,


onSuccess:()=>{


queryClient.invalidateQueries({

queryKey:["products"]

});


}

});





if(isLoading){

return (

<div className="loading-box">

Loading Products...

</div>

)

}





return(


<div className="admin-products-page">



<div className="products-header">


<div>

<h1>
Products Inventory
</h1>

<p>
Manage your store products easily
</p>

</div>



<Link to="/admin/add-product">

<button className="add-product-btn">

+ Add Product

</button>

</Link>


</div>





<div className="product-count">

Total Products : {data.length}

</div>






<div className="admin-products-grid">


{

data.map((product)=>(



<div 
className="admin-product-card"

key={product.id}
>




<div className="admin-image-box">


<img

src={product.thumbnail || product.image}

alt={product.title}

className="admin-product-image"

/>


</div>





<div className="admin-product-details">


<h3>
{product.title}
</h3>


<span>
{product.category}
</span>


<h2>
₹ {product.price}
</h2>


</div>





<div className="admin-product-actions">


<Link to={`/admin/edit-product/${product.id}`}>

<button className="edit-btn">

Edit

</button>

</Link>




<button

className="delete-btn"

onClick={()=>deleteMutation.mutate(product.id)}

>

Delete

</button>



</div>




</div>



))

}


</div>




</div>


)


}


export default Products;