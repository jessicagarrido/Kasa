import logoColor from "../assets/logo/logo-color.png";

function Header() {
  return (
    <header>
      <div className="logoColor">
        <img src={logoColor} alt="logo Kasa" />
      </div>

    <nav>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">A propos</a></li>
      </ul>
        
        
    </nav>
      
    </header>
  );
}

export default Header;
