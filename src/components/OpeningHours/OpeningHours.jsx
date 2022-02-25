import "./OpeningHours.css";

import Img from "../../assets/OutsideBig.png";

const OpeningHours = () => (
  <div
    className="app__openingHours-bg app__openingHours-wrapper"
    style={{ backgroundImage: `url(${Img})`, height: "500px" || undefined }}
  >
    <div className="app__openingHours-data">
      <h1>ÖFFNUNGSZEITEN</h1>
      <h2>Montag - Sonntag</h2>
      <h2>9:30 - 20:00</h2>
    </div>
  </div>
);

export default OpeningHours;
