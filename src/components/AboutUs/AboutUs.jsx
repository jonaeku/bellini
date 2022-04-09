import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="app__aboutUs section__padding">
        <h1 className="app__h1">ÜBER UNS</h1>
        <hr className="app__hr" />
      <div className="app__wrapper">
        <div className="app__wrapper_img app__aboutUs-img">
          <img src={require("../../assets/aboutUspic.png")} alt="header_img" />
        </div>
        <div className="app__wrapper_info" style={{backgroundColor: "#D79A60"}}>
          <h1 className="app__aboutUs-h1">
            <p className="app__aboutUs-Welcome">
              {" "}
              <span>Wir</span>
              <span className="app__aboutUs-h1" style={{ color: "black" }}>
                {" "}
                sind seit März 2011 mit exklusiver Eleganz und einem Hauch ins Mediterrane für Sie da.
                Auf unserer schönen Sonnenterrasse können Sie in aller Ruhe ihre Seele baumeln lassen und unsere Eis-, Kaffee-und Weinspezialitäten genießen.
                Und sollte das Wetter mal nicht mitspielen, in unserem beschwingt lebendigen Innenbereich bietet sich genügend Platz!
                In unserem familiengeführtem Eiscafé  wird das Eis ausschließlich aus frischen Naturprodukten hergestellt. Unser Fruchteis ist laktosefrei und glutenfrei.
                Sie können aus vielen italienischen Kaffeespezialitäten wählen, vom Espresso bis hin zum Latte Macchiato, mit dem Gewissen "Etwas".
                <br /> Außerdem haben wir für Sie leckere Snacks und hausgemachte Pizza 🍕 
              </span>
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
