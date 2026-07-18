import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("isAdmin", "true");
    navigate("/admin");
  }

  return (
    <div>
      <h1>Admin Login</h1>

      <button onClick={handleLogin}>
        Login as Admin
      </button>
    </div>
  );
}

export default Login;