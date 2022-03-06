import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer-out">
    <hr className="app__hr-footer" />
    <div className="app__footer-wrapper">
      <div className="app__footer-container">
        <p>Bellini <br /> Frantzplatz <br /> 67487 Maikammer</p>
        <p className="middle">Öffnungszeiten <br /> Montag - Sonntag <br /> 9:30 - 20:00</p>
      </div>
      <div className="app__footer-logo">
        <img src={require("../../assets/logo.png")} alt="Logo" />
      </div>
      <div className="app__footer-container">
        <p className="middle text verticalCenter">
          Bleiben <br /> Sie <br /> gesund !
        </p>

        <p className="verticalCenter">
          <div className="right">
            <Link to={"/impressum"}> Impressum </Link>
            <Link to={"/datenschutz"}> Datenschutz </Link>
            <a href="mailto:info@cafebellini.de">info@cafebellini.de</a>
          </div>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
