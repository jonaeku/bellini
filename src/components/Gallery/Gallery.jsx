import "./Gallery.css";
import ImageSlider from "./ImageSlider";
import { Images } from "./Images";

function Gallery() {
  return (
    <div className="app__gallery-wrapper">
      <h1 className="app__h1">GALERIE</h1>
      <hr className="app__hr"/>
      <ImageSlider slides={Images} />
    </div>
  );
}

export default Gallery;
