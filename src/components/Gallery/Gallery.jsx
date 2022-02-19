import "./Gallery.css";
import ImageSlider from "./ImageSlider";
import { Images } from "./Images";

function Gallery() {
  return (
    <div className="app__gallery-wrapper">
      <ImageSlider slides={Images} />
    </div>
  );
}

export default Gallery;
