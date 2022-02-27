import "./Food.css";
import FoodHeader from "./FoodHeader";

const IceFood = ({props}) => {
  return (
    <div>
      <FoodHeader />
      <div className="app__food-wrapper">
        {props.map((img) => {
          return (
            <div key={img}>
              <img src={img.image} alt="Image" className="food-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IceFood;
