import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import CoffeeCake from "./components/CoffeeCake/CoffeeCake";
import Gallery from "./components/Gallery/Gallery";
import IceCream from "./components/IceCream/IceCream";
import Navbar from "./components/Navbar/Navbar";
import OpeningHours from "./components/OpeningHours/OpeningHours";
import StartPage from "./components/StartPage/StartPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StartPage />
      <IceCream />
      <OpeningHours />
      <CoffeeCake />
      <AboutUs />
      <Gallery />
    </div>
  );
}

export default App;
