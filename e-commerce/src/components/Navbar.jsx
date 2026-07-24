import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import "../styles/components.css";


function Navbar(){

const navigate = useNavigate();

const isAdmin = localStorage.getItem("isAdmin") === "true";

const {cart}=useContext(CartContext);


const cartCount = cart.reduce(
(total,item)=> total + item.quantity,
0
);



const handleLogout=()=>{

localStorage.removeItem("isAdmin");

navigate("/");

};



return(

<header className="navbar">


<div className="brand">

<Link to="/">
Nexus<span>Store</span>
</Link>

</div>



<nav className="nav-menu">


<Link to="/">
Home
</Link>


<Link to="/products">
Products
</Link>


<Link to="/cart" className="cart">

<FaShoppingBag/>

Cart

<span>
{cartCount}
</span>

</Link>



{
isAdmin ?

<button
className="logout-btn"
onClick={handleLogout}
>
Logout
</button>


:

<Link
to="/login"
className="login-btn"
>

<FaUser/>

Login

</Link>

}


</nav>


</header>

)

}


export default Navbar;