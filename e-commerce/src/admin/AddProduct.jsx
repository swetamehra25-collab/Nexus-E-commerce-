import {
useMutation,
useQueryClient
} from "@tanstack/react-query";


import productApi from "../api/productApi";



function AddProducts(){



const queryClient = useQueryClient();




const mutation = useMutation({


mutationFn: productApi.addProduct,


onSuccess:()=>{


queryClient.invalidateQueries({
queryKey:["products"]
});


}


});




function handleSubmit(e){


e.preventDefault();



const product={


title:e.target.title.value,


price:Number(e.target.price.value),


image:e.target.image.value


};



mutation.mutate(product);



e.target.reset();


}




return(


<div className="add-product-page">



<div className="add-product-header">


<h1>
Add New Product
</h1>


<p>
Create and manage your store inventory easily
</p>


</div>




<form className="add-product-form" onSubmit={handleSubmit}>



<div className="form-group">


<label>
Product Name
</label>


<input
name="title"
placeholder="Enter product name"
required
/>


</div>




<div className="form-group">


<label>
Price
</label>


<input


name="price"


placeholder="Enter price"


type="number"

required

/>


</div>




<div className="form-group">


<label>
Image URL
</label>


<input


name="image"


placeholder="Paste product image URL"


/>


</div>




<button type="submit">


Add Product


</button>




</form>



</div>



)


}



export default AddProducts;