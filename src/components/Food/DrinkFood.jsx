import "./Food.css";
import FoodHeader from "./FoodHeader";

const cardSites = [];

function loop() {
  for (var x = 1; x < 7; x++) {
    cardSites[x] = { image: require("./../../assets/Food/drink-" + x + ".png") };
  }
}

loop();

const DrinkFood = () => {
  return (
    <div>
      <FoodHeader />
      <div className="app__food-wrapper">
        {cardSites.map((img) => {
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

export default DrinkFood;
