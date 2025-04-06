import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import logonew from "../assets/logonew.png"; // Adjust the path if using public/

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logonew} alt="Logo" className="logo-img" />
        <span>Blogs.</span>
      </Link>
      <div className="navbar-links">
        {user ? (
          <>
            <span className="navbar-user">Hi, {user.name}</span>
            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="navbar-button logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-button auth-btn">
              Login
            </Link>
            <Link to="/signup" className="navbar-button auth-btn">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
