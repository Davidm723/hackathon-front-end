import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <nav className="navbar">
      {user ? (
        <ul>
          <li>Welcome, {user.username}</li>
          <li>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
    navigate("/sign-up");
  };

  return (
    
      <div className="nav-left">
        <Link to="/">MyApp</Link>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/sign-in">Sign In</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;


