import { createContext, useEffect, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";


export const CartContext = createContext();


const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};


function CartProvider({ children }) {

  const [state, dispatch] = useReducer(
    CartReducer,
    initialState
  );


  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(state.cart)
    );
  }, [state.cart]);


  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export default CartProvider;