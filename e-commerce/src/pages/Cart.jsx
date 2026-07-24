import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/pages.css";

function Cart() {

const { cart, dispatch } = useContext(CartContext);

const totalPrice = cart.reduce(
(total, item) => total + item.price * item.quantity,
0
);


return (

<div className="cart-page">

    <h1 className="cart-heading">
        Shopping Cart
    </h1>


    {
    cart.length === 0 ? (

        <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some products to continue shopping</p>
        </div>


    ) : (


    <div className="cart-container">


        <div className="cart-products">


        {
        cart.map((item)=>(


        <div className="cart-product-card" key={item.id}>


           <img
  src={item.image || item.thumbnail}
  alt={item.title}
/>


            <div className="cart-product-info">


                <h2>
                    {item.title}
                </h2>


                <p className="cart-price">
                    ₹{item.price}
                </p>



                <div className="quantity-box">


                    <button
                    onClick={()=>
                    dispatch({
                        type:"DECREASE_QUANTITY",
                        payload:item.id
                    })
                    }
                    >
                    -
                    </button>



                    <span>
                        {item.quantity}
                    </span>



                    <button
                    onClick={()=>
                    dispatch({
                        type:"INCREASE_QUANTITY",
                        payload:item.id
                    })
                    }
                    >
                    +
                    </button>


                </div>



                <button
                className="remove-btn"

                onClick={()=>
                dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:item.id
                })
                }

                >
                    Remove
                </button>



            </div>


        </div>


        ))
        }


        </div>



        <div className="checkout-box">


            <h2>
                Order Summary
            </h2>


            <div className="summary-line">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
            </div>


            <div className="summary-line">
                <span>Delivery</span>
                <span>Free</span>
            </div>


            <hr/>


            <div className="total-line">

                <span>Total</span>

                <span>
                    ₹{totalPrice}
                </span>

            </div>



            <button className="checkout-btn">
                Proceed Checkout
            </button>


        </div>


    </div>


    )
    }


</div>

)

}

export default Cart;