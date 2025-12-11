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
      <div className="nav-left">
        <Link to="/">The hottest playlist app</Link>
      </div>
      <div className="nav-right">
        {user ? (
          <ul>
            <li>
              <span>Welcome, {user.username}</span>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li><Link to='/songs'>Songs</Link></li>
            <li>
              <Link to="/" onClick={handleSignOut}>
                Sign Out
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
