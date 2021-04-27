import React from "react";
import WomanServer from "../SVGs/WomanServer";

const Welcome = () => {
  return (
    <div className="flex-grow flex flex-col my-10 mx-5">
      <h1 className="font-majormono text-2xl typewriter-text mb-10 bg-faded-white py-1">
        hello, my nAme is sAndy.
      </h1>
      <div className="">
        <div className="flex flex-col-reverse sm:flex-row font-monocut justify-around items-center font-monocut">
          <WomanServer />
          <div className="sm:py-5 mr-5">
            <div className="border-l-4 border-neon-purple pl-10">
              <p className="bg-faded-white rounded-full max-w-prose">
                I am a versatile software engineer who enjoys working across the
                entire stack.
              </p>
              <br></br>
              <p className="max-w-prose bg-faded-white rounded-full">
                I love writing code, and I love writing words. Occassionally, I
                write words about writing code.
              </p>
              <br></br>
              <p className="max-w-prose bg-faded-white rounded-full">
                I firmly believe that tech can and should be a{" "}
                <b className="font-open highlight">force for good</b>, and it is
                this creative and transformative potential that motivates me to
                code.
              </p>
              <br></br>
              <button className="mx-auto font-open font-bold rounded  px-10 py-3 bg-gradient-purple text-white button-shadow transform duration-300 hover:scale-105">
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
