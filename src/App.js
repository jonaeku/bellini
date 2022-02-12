import "./App.css";
import IceCream from "./components/IceCream/IceCream";
import Navbar from "./components/Navbar/Navbar";
import StartPage from "./components/StartPage/StartPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StartPage />
      <IceCream />
    </div>
  );
}

export default App;
