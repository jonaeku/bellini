import "./StartPage.css";

import useWindowDimensions from "../../useful/WindowSize";

const StartPage = () => {
  const { height } = useWindowDimensions();

  const componentHeight = height - 100;

  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h2>Eiscafé-Snackbar-Lounge</h2>
        <hr className="app__header-hr"/>
        <h1 className="app__header-h1">
          <p className="app__header-Welcome">Willkommen</p> 
          im Eiscafé Bellini
        </h1>
        <button type="button" className="custom__button">
          Über Uns
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={require("../../assets/icecream.png")} alt="header_img" />
      </div>
    </div>
  );
};

export default StartPage;
