import "./StartPage.css";

const StartPage = () => {
  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h2>Eiscafé-Snackbar-Lounge</h2>
        <hr className="app__header-hr"/>
        <h1 className="app__header-h1">
          <p className="app__header-Welcome"> <span>Willkommen</span><span className="app__header-h1" style={{color: "black"}}> im Eiscafé Bellini</span></p>
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
