import "./App.css";
import IceCream from "./IceCream";
import WomanServer from "./SVGs/WomanServer";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Common/Routes";

function App() {
  return (
    <div className="content-wrapper bg-white bg-opacity-80">
      {/*       <h1 className="font-monocut text-2xl">Hello, my name is Sandy.</h1>
      <h1 className="font-monofett text-2xl">Hello, my name is Sandy.</h1>
      <h1 className="font-open text-2xl">Hello, my name is Sandy.</h1> */}
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
