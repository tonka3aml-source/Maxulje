import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../components/CartContext";
import "../pages/Nav.css";

const Nav = () => {
  const location = useLocation();
  const [name, setName] = useState(null);

  const { cart } = useContext(CartContext);

  const brojProizvoda = cart.reduce((sum, item) => sum + item.kolicina, 0);

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setName(user);
  }, []);

  if (location.pathname === "/signin") return null;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container text-white">
        <img src="img/favicon-max.png" width="60px" alt="" />

        <Link to="/" className="navbar-brand">
          MAXIMALNO ULJE - Snaga iz zemlje
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav linkovi */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/onama">
                O nama
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/proizvodi">
                Proizvodi
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/kontakt">
                Kontakt
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/kosarica">
                🛒 Košarica ({brojProizvoda})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
