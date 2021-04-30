import React from "react";
import WomanServer from "../SVGs/WomanServer";
import Tailwind from "../SVGs/Stack/Tailwind";
import Bootstrap from "../SVGs/Stack/Bootstrap";
import Javascript from "../SVGs/Stack/JavaScript";
import Python from "../SVGs/Stack/Python";
import ReactSVG from "../SVGs/Stack/React";
import Jest from "../SVGs/Stack/Jest";
import Postgres from "../SVGs/Stack/Postgres";
import Flask from "../SVGs/Stack/Flask";
import Express from "../SVGs/Stack/Express";
import Node from "../SVGs/Stack/Node";
import { motion } from "framer-motion";
import FooterWelcome from "../Common/FooterWelcome";

const Welcome = () => {
  return (
    <>
      <div className="flex-grow flex flex-col mt-10 mb-40 sm:my-10 mx-5">
        <h1 className="font-majormono text-2xl typewriter-text mb-10 bg-faded-white py-1">
          hello, my nAme is sAndy.
        </h1>
        <div className="">
          <div className="flex flex-col-reverse sm:flex-row font-monocut justify-around items-center font-monocut">
            <WomanServer className="sm:w-6/12 lg:w-3/12 bg-faded-white rounded-full my-20 sm:my-0" />
            <div className="sm:py-5 mr-5">
              <div className="border-l-4 border-neon-purple pl-10">
                <p className="bg-faded-white rounded-full max-w-prose">
                  I am a versatile software engineer who enjoys working across
                  the entire stack.
                </p>
                <br></br>
                <p className="max-w-prose bg-faded-white rounded-full">
                  I love writing code, and I love writing words. Occassionally,
                  I write words about writing code.
                </p>
                <br></br>
                <p className="max-w-prose bg-faded-white rounded-full">
                  I firmly believe that tech can and should be a{" "}
                  <b className="font-open highlight">force for good</b>, and it
                  is this creative and transformative potential that motivates
                  me to code.
                </p>
                <br></br>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  //className="w-7/12 sm:w-full mx-auto grid grid-cols-5 sm:grid-cols-10 gap-3 sm:gap-4 z-50"
                  className="flex flex-wrap justify-center items-start z-50"
                >
                  <Python className="w-8 md:w-10 mx-1" />{" "}
                  <Javascript className="w-8 md:w-10 mx-1" />{" "}
                  <Node className="w-8 md:w-10 mx-1" />
                  <ReactSVG className="w-8 md:w-10 mx-1" />{" "}
                  <Postgres className="w-8 md:w-10 mx-1" />{" "}
                  <Jest className="w-8 md:w-10 mx-1" />{" "}
                  <Flask className="w-8 md:w-10 mx-1" />{" "}
                  <Express className="w-8 md:w-10 mx-1" />
                  <Tailwind className="w-8 md:w-10 mx-1" />{" "}
                  <Bootstrap className="w-8 md:w-10 mx-1" />
                </motion.div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterWelcome />
    </>
  );
};

export default Welcome;
