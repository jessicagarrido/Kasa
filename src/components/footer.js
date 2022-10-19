import logoWhite from "../assets/logo/logo-white.png";

function Footer() {
  const effectiveYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src={logoWhite}  className="footerLogo" alt="Logo Kasa blanc"/>
      <p className="footerText">
        &copy;
        {effectiveYear} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;