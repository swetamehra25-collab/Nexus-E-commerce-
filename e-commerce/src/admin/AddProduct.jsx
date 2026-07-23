import {
useMutation,
useQueryClient
}
from "@tanstack/react-query";


import productApi from "../api/productApi";



function AddProducts(){


const queryClient =
useQueryClient();



const mutation =
useMutation({

mutationFn:productApi.addProduct,


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


price:Number(
e.target.price.value
)


};



mutation.mutate(product);


}





return(

<form onSubmit={handleSubmit}>


<input
name="title"
placeholder="Product Name"
/>


<input
name="price"
placeholder="Price"
/>



<button>

Add Product

</button>


</form>


)


}


export default AddProducts;