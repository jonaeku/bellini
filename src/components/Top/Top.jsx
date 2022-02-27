import { IoIosArrowRoundUp } from "react-icons/io";
import "./Top.css";

function ScrollToTop(e) {
  e.preventDefault();
  window.scrollTo(0, 0);
}
const Top = () => {
  return (
    <button className="app__scrollUp" onClick={ScrollToTop}>
      <IoIosArrowRoundUp className="app__scrollUp-icon" />
    </button>
  );
};

export default Top;
