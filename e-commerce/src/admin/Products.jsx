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
    data,
    isLoading
  } = useQuery({
    queryKey: ["products"],
    queryFn: productApi.getProducts
  });

  const deleteMutation = useMutation({

    mutationFn: productApi.deleteProduct,

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["products"]
      });

    }

  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (

    <div>

      {
        data?.map((product) => (

          <div
            className="admin-product-card"
            key={product.id}
          >

            <img
              src={product.thumbnail || product.image}
              alt={product.title}
              className="admin-product-image"
            />

            <div className="admin-product-details">

              <h3>{product.title}</h3>

              <p>
                ₹ {product.price}
              </p>

            </div>

            <div className="admin-product-actions">

              <Link to={`/admin/edit-product/${product.id}`}>

                <button>
                  Edit
                </button>

              </Link>

              <button
                onClick={() => deleteMutation.mutate(product.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))
      }

    </div>

  );

}

export default Products;