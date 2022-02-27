import "./Food.css";
import { Link } from "react-router-dom";
import { FaIceCream, FaPizzaSlice, FaWineGlassAlt } from "react-icons/fa";

const FoodHeader = () => {
  return (
    <div>
      <nav className="app__food-nav">
        <ul>
          <Link className="link" to={"/food/eiskarte"}>
            <li className={"custom__button s"}>
              <FaIceCream />
            </li>
          </Link>
          <Link className="link" to={"/food/speisekarte"}>
            <li className="custom__button s">
              <FaPizzaSlice />
            </li>
          </Link>
          <Link className="link" to={"/food/getraenkekarte"}>
            <li className="custom__button s">
              <FaWineGlassAlt />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default FoodHeader;
