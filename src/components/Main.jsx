import AboutUs from "./AboutUs/AboutUs";
import CoffeeCake from "./CoffeeCake/CoffeeCake";
import Contact from "./Contact.jsx/Contact";
import Gallery from "./Gallery/Gallery";
import IceCream from "./IceCream/IceCream";
import OpeningHours from "./OpeningHours/OpeningHours";
import StartPage from "./StartPage/StartPage";

const Main = () => {
  return (
    <>
      <StartPage />
      <IceCream />
      <OpeningHours />
      <CoffeeCake />
      <AboutUs />
      <div id="galerie">
        <Gallery />
      </div>
      <div id="kontakt">
        <Contact />
      </div>
    </>
  );
};

export default Main;
