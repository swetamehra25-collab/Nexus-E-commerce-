import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} width="150" />

            <h3>{item.title}</h3>

            <p>Price: ₹{item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <button
              onClick={() =>
                dispatch({
                  type: "DECREASE_QUANTITY",
                  payload: item.id,
                })
              }
            >
              -
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "INCREASE_QUANTITY",
                  payload: item.id,
                })
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{totalPrice}</h2>
    </div>
  );
}

export default Cart;
