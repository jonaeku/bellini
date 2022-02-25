import "./Food.css"
import { Link } from "react-router-dom";

const FoodHeader = () => {
  return (
    <nav className="app__food-nav">
      <ul>
        <Link className="link" to={"/food/eiskarte"}>
          <li className="custom__button s">Eiskarte</li>
        </Link>
        <Link className="link" to={"/food/speisekarte"}>
          <li className="custom__button s">Speisekarte</li>
        </Link>
        <Link className="link" to={"/food/getraenkekarte"}>
          <li className="custom__button s">Getränkekarte</li>
        </Link>
      </ul>
    </nav>
  );
};

export default FoodHeader;
