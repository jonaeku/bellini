import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import CoffeeCake from "./components/CoffeeCake/CoffeeCake";
import Contact from "./components/Contact.jsx/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import IceCream from "./components/IceCream/IceCream";
import Navbar from "./components/Navbar/Navbar";
import OpeningHours from "./components/OpeningHours/OpeningHours";
import StartPage from "./components/StartPage/StartPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
