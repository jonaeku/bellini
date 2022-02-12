import "./IceCream.css";

import useWindowDimensions from "../../useful/WindowSize";

const IceCream = () => {

  return (
    <div className="section__padding app__wrapper app__iceCream">
      <div>
        <h1 className="app__iceCream-h1">23 KÖSTLICHE EISSORTEN</h1>
        <hr className="app__hr"/>
      </div>
      <div className="app__iceCream-img">
        <img className="app__iceCream-img" src={require("../../assets/eissorten.jpeg")} alt="header_img" />
      </div>
    </div>
  );
};

export default IceCream;
