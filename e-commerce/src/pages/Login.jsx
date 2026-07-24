import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

function Login() {

const navigate = useNavigate();


function handleLogin() {

localStorage.setItem("isAdmin", "true");

navigate("/admin");

}


return (

<div className="login-page">


  <div className="login-card">


    <h1>
      Admin Login
    </h1>


    <p>
      Login to access your admin dashboard
    </p>



    <input
      type="email"
      placeholder="Enter email"
    />



    <input
      type="password"
      placeholder="Enter password"
    />



    <button onClick={handleLogin}>
      Login
    </button>


  </div>


</div>

);

}

export default Login;