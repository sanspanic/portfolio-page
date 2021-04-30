import "./App.css";
import Navbar from "./Common/Navbar";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Common/Routes";

function App() {
  return (
    <div className="content-wrapper bg-white bg-opacity-80">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
