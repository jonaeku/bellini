import React from "react";
import "./Navbar.css";
import { CgMenu } from "react-icons/cg"
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app_navbar">
      <ul className="app__navbar-links">
        <li><a href="#home">Eiscafé</a></li>
        <li><a href="#home">Speisekarte</a></li>
        <div className="app__navbar-logo">
          <img src={require("../../assets/logo.png")} alt="Logo" />
        </div>
        <li><a href="#home">Aktuelles</a></li>
        <li><a href="#home">Kontakt</a></li>
        <div id="app__navbar-line"></div>
        <img id="app__navbar-facebook" src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook Logo"/>
      </ul>

      <div className="app__navbar-smallscreen">
        <div className="app__navbar-logo">
          <img src={require("../../assets/logo.png")} alt="Logo" />
        </div>
        <CgMenu className="app__navbar-smallscreen-burger" color="black" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <IoClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Eiscafé</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Speisekarte</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Aktuelles</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Kontakt</a></li>
            </ul>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
