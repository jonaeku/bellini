import "./Food.css";
import FoodHeader from "./FoodHeader";

const cardFoodSites = [];

function loop() {
  for (var x = 1; x < 9; x++) {
    cardFoodSites[x] = { image: require("./../../assets/Food/Food-" + x + ".png") };
  }
}

loop();

const WarmFood = () => {
  return (
    <div>
      <FoodHeader />
      <div className="app__food-wrapper">
        {cardFoodSites.map((img) => {
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

export default WarmFood;
