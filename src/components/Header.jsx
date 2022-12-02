import logoColor from "../assets/logo/logo-color.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container">
      <div className="logoColor">
        <img src={logoColor} alt="logo Kasa" />
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
