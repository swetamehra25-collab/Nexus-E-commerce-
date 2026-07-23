import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

const navigate = useNavigate();


function handleLogout(){

localStorage.removeItem("isLoggedIn");

navigate("/");

}


return (

<div className="sidebar">


<h2>
Admin Panel
</h2>


<Link to="/admin">
Dashboard
</Link>


<Link to="/admin/products">
Products
</Link>


<Link to="/admin/add-product">
Add Product
</Link>



<button onClick={handleLogout}>
Logout
</button>


</div>

)

}

export default Sidebar;