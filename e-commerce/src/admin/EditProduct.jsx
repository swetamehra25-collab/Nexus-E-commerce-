import {
useQuery,
useMutation,
useQueryClient
} from "@tanstack/react-query";

import {
useParams,
useNavigate
} from "react-router-dom";

import productApi from "../api/productApi";


function EditProduct() {


const { id } = useParams();

const navigate = useNavigate();

const queryClient = useQueryClient();



const { data, isLoading } = useQuery({

queryKey:["product", id],

queryFn:()=>productApi.getProductById(id)

});





const mutation = useMutation({

mutationFn:productApi.updateProduct,


onSuccess:()=>{


queryClient.invalidateQueries({

queryKey:["products"]

});


navigate("/admin/products");


}

});






function handleSubmit(e){


e.preventDefault();



const product={


id:Number(id),

title:e.target.title.value,

price:Number(e.target.price.value)


};



mutation.mutate(product);



}





if(isLoading){

return (

<div className="loading-box">

Loading Product...

</div>

)

}





return(


<div className="edit-product-page">



<div className="edit-header">

<h1>
Edit Product
</h1>

<p>
Update product details from your inventory
</p>

</div>




<form className="edit-product-form" onSubmit={handleSubmit}>


<div className="form-group">


<label>
Product Name
</label>


<input

name="title"

defaultValue={data.title}

/>


</div>





<div className="form-group">


<label>
Price
</label>


<input

name="price"

type="number"

defaultValue={data.price}

/>


</div>





<div className="edit-buttons">


<button type="submit">

Update Product

</button>



<button

type="button"

className="cancel-btn"

onClick={()=>navigate("/admin/products")}

>

Cancel

</button>


</div>




</form>



</div>


)


}


export default EditProduct;