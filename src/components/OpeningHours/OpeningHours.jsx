import { Parallax } from "react-parallax";
import "./OpeningHours.css";

import Img from "../../assets/OutsideBig.png";

const OpeningHours = () => (
  <Parallax
    className="app__openingHours-img"
    bgImage={Img}
    bgImageAlt="Bellini"
    strength={200}
  >
    <div className="lol">
      <div className="app__openingHours-data">
        <h1>ÖFFNUNGSZEITEN</h1>
        <h2>Montag - Sonntag</h2>
        <h2>9:30 - 20:00</h2>
      </div>
    </div>
  </Parallax>
);

export default OpeningHours;
