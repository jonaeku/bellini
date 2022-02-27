import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import WarmFood from "./components/Food/WarmFood";
import IceFood from "./components/Food/IceFood";
import DrinkFood from "./components/Food/DrinkFood";
import Imprint from "./components/ImpressumDatenschutz/Imprint";
import Datenschutz from "./components/ImpressumDatenschutz/Datenschutz";
import Top from "./components/Top/Top";

const cardSites = [];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  
        <Top />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/food/eiskarte" exact element={<IceFood props={cardSites} />} />
          <Route path="/food/speisekarte" exact element={<WarmFood />} />
          <Route path="/food/getraenkekarte" exact element={<DrinkFood />} />
          <Route path="/impressum" exact element={<Imprint />} />
          <Route path="/datenschutz" exact element={<Datenschutz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

for (var x = 1; x < 35; x++) {
  cardSites[x] = { image: require("./assets/Food/Ice-" + x + ".png") };
}

export default App;
