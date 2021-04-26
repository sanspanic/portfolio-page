import React from "react";
import WomanServer from "../SVGs/WomanServer";
import Logo from "../Assets/croppedLogo.png";

const Welcome = () => {
  return (
    <div className="flex-grow flex flex-col my-10 mx-5">
      <h1 className="font-majormono text-2xl typewriter-text mb-10">
        hello, my nAme is sAndy.
      </h1>
      <div className="">
        <div className="flex font-monocut justify-around items-center">
          <WomanServer width="400" />
          <div className="py-5 mr-5">
            <div className="border-l-4 border-neon-purple pl-10">
              <p>I am a full-stack software engineer.</p>
              <br></br>
              <p className="max-w-prose">
                I love writing code, and I love writing words. Occassionally, I
                write words about writing code.
              </p>
              <br></br>
              <p className="max-w-prose">
                I firmly believe that tech can and should be a{" "}
                <b className="font-open">force for good</b>, and it is its
                creative and transformative potential that motivates me to code.
              </p>
              <br></br>
              <button className="mx-auto font-open font-bold rounded  px-10 py-3 bg-gradient-green text-white button-shadow">
                Explore
              </button>
              <br></br>
            </div>
          </div>
        </div>
      </div>

      {/*       <IceCream width="100" /> */}
    </div>
  );
};

export default Welcome;
