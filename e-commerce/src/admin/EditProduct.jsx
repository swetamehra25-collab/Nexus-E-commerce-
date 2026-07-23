import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import productApi from "../api/productApi";

function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({

    queryKey: ["product", id],

    queryFn: () => productApi.getProductById(id),

  });

  const mutation = useMutation({

    mutationFn: productApi.updateProduct,

    onSuccess: () => {

      queryClient.invalidateQueries({

        queryKey: ["products"]

      });

      navigate("/admin/products");

    }

  });

  function handleSubmit(e) {

    e.preventDefault();

    const product = {

      id: Number(id),

      title: e.target.title.value,

      price: Number(e.target.price.value)

    };

    mutation.mutate(product);

  }

  if (isLoading) {

    return <h2>Loading...</h2>;

  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        name="title"
        defaultValue={data.title}
      />

      <input
        name="price"
        defaultValue={data.price}
      />

      <button>

        Update Product

      </button>

    </form>

  );

}

export default EditProduct;