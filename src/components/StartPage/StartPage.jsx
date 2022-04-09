import { HashLink } from "react-router-hash-link";
import "./StartPage.css";

const StartPage = () => {
  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h2 className="app__header-background">Eiscafé-Snackbar-Lounge</h2>
        <hr className="app__header-hr" />
        <h1 className="app__header-h1">
          <p className="app__header-Welcome app__header-background">
            {" "}
            <span>Willkommen</span>
            <span className="app__header-h1" style={{ color: "black" }}>
              {" "}
              im Eiscafé Bellini
            </span>
          </p>
        </h1>
        <HashLink to={"/#aboutUs"}>
          <button type="button" className="custom__button ">
            Über uns
          </button>
        </HashLink>
      </div>

      {/* <div className="app__wrapper_img">
        <img src={require("../../assets/icecream.png")} alt="header_img" />
      </div> */}
    </div>
  );
};

export default StartPage;
