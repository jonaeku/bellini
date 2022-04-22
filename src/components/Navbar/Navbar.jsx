import React from "react";
import "./Navbar.css";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app_navbar">
      <ul className="app__navbar-links">
        <Link to={"/"}>
          <li>Eiscafé</li>
        </Link>
        <Link to={"/food/eiskarte"}>
          <li>Speisekarte</li>
        </Link>
        <Link to={"/"}>
          <div className="app__navbar-logo">
            <img src={require("../../assets/Logoo.png")} alt="Logo" />
          </div>
        </Link>
        <HashLink to={"/#galerie"}>
          <li>Galerie</li>
        </HashLink>
        <HashLink to={"/#kontakt"}>
          <li>Kontakt</li>
        </HashLink>
        <div id="app__navbar-line"></div>
        <a href="https://www.facebook.com/profile.php?id=100063577450034">
          <img
            id="app__navbar-facebook"
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Facebook Logo"
          />
        </a>
      </ul>

      <div className="app__navbar-mobile">
        <Link to={"/"}>
          <div className="app__navbar-logo">
            <img src={require("../../assets/Logoo.png")} alt="Logo" />
          </div>
        </Link>
        <CgMenu
          className="app__navbar-mobile-burger"
          color="black"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-mobile_overlay">
            <IoClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-mobile_links">
              <HashLink to={"/#"} onClick={() => setToggleMenu(false)}>
                <li>Eiscafé</li>
              </HashLink>
              <Link to={"/food/eiskarte"} onClick={() => setToggleMenu(false)}>
                <li>Speisekarte</li>
              </Link>
              <HashLink to={"/#galerie"} onClick={() => setToggleMenu(false)}>
                <li>Galerie</li>
              </HashLink>
              <HashLink to={"/#kontakt"} onClick={() => setToggleMenu(false)}>
                <li>Kontakt</li>
              </HashLink>
              <a href="https://www.facebook.com/profile.php?id=100063577450034">
                <img
                  id="app__navbar-mobile_facebook"
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt="Facebook Logo"
                />
              </a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
