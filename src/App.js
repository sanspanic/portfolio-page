import "./App.css";
import IceCream from "./IceCream";
import WomanServer from "./SVGs/WomanServer";
import Navbar from "./Common/Navbar";

function App() {
  return (
    <div className="App">
      {/*       <h1 className="font-monocut text-2xl">Hello, my name is Sandy.</h1>
      <h1 className="font-monofett text-2xl">Hello, my name is Sandy.</h1>
      <h1 className="font-open text-2xl">Hello, my name is Sandy.</h1> */}
      <Navbar />
      <h1 className="font-majormono text-2xl typewriter-text">
        hello, my nAme is sAndy.
      </h1>
      <div>
        <WomanServer width="500" />
      </div>

      {/*       <IceCream width="100" /> */}
    </div>
  );
}

export default App;
