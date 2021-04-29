import React, { useState } from "react";
import Postgres from "../SVGs/Stack/Postgres";
import Python from "../SVGs/Stack/Python";
import JavaScript from "../SVGs/Stack/JavaScript";
import Node from "../SVGs/Stack/Node";
import Flask from "../SVGs/Stack/Flask";
import ReactSVG from "../SVGs/Stack/React";
import Tailwind from "../SVGs/Stack/Tailwind";
import Jest from "../SVGs/Stack/Jest";
import Bootstrap from "../SVGs/Stack/Bootstrap";
import Express from "../SVGs/Stack/Express";
import { motion } from "framer-motion";
import { ArrowSquareLeft, ArrowSquareRight } from "phosphor-react";

const ProjectDetail = ({
  title,
  description1,
  description2,
  src,
  stack,
  github,
  live,
  demo,
  setCurrProjectIndex,
  currProjectIndex,
}) => {
  const [clickedX, setClickedX] = useState(0);
  const [clickedXLeft, setClickedXLeft] = useState(0);
  const [clickedOpacity, setClickedOpacity] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleNext = () => {
    setClickedOpacity(0);
    setTimeout(() => {
      if (currProjectIndex === 3) {
        setCurrProjectIndex(0);
        setClickedOpacity(1);
      } else {
        setCurrProjectIndex((i) => i + 1);
        setClickedOpacity(1);
      }
    }, [500]);
  };

  const handlePrevious = () => {
    setClickedOpacity(0);
    setTimeout(() => {
      if (currProjectIndex === 0) {
        setCurrProjectIndex(3);
        setClickedOpacity(1);
      } else {
        setCurrProjectIndex((i) => i - 1);
        setClickedOpacity(1);
      }
    }, [500]);
  };

  const projectVariants = {
    appear: {
      opacity: [0, 1],
      scale: [0, 1],
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div className="relative h-screen flex items-center mt-20 sm:mt-0">
        <div className="sm:-mt-60 mx-auto w-11/12 lg:w-9/12">
          <div className="flex justify-between items-start sm:items-center mx-auto carousel">
            <motion.button onClick={handlePrevious}>
              <ArrowSquareLeft size={48} />
            </motion.button>
            <h2 className="inline font-monofett tracking-widest font-bold text-4xl sm:text-5xl lg:text-6xl text-center mb-10 sm:my-10">
              {title}
            </h2>
            <button onClick={handleNext}>
              <ArrowSquareRight size={48} />
            </button>
          </div>

          <motion.div
            animate={{
              opacity: [1, clickedOpacity, 1],
              transition: { duration: 0.7 },
            }}
            className="flex flex-col sm:flex-row items-center fancy-border bg-faded-white"
          >
            {" "}
            <div className="w-9/12 sm:w-4/12 pt-5 sm:pt-0">
              <img alt="project mockup" className="mockup-img" src={src}></img>
            </div>
            <div className="sm:w-7/12">
              <div className="flex justify-evenly items-center py-2 mt-5">
                {stack && stack.includes("javascript") && (
                  <JavaScript className="w-8" />
                )}
                {stack && stack.includes("python") && (
                  <Python className="w-8" />
                )}
                {stack && stack.includes("node") && <Node className="w-8" />}
                {stack && stack.includes("express") && (
                  <Express className="w-8" />
                )}
                {stack && stack.includes("postgres") && (
                  <Postgres className="w-8" />
                )}
                {stack && stack.includes("react") && (
                  <ReactSVG className="w-8" />
                )}
                {stack && stack.includes("jest") && <Jest className="w-8" />}
                {stack && stack.includes("tailwind") && (
                  <Tailwind className="w-8" />
                )}
                {stack && stack.includes("flask") && <Flask className="w-8" />}
                {stack && stack.includes("bootstrap") && (
                  <Bootstrap className="w-8" />
                )}
              </div>
              <div className="flex justify-center items-center pt-6 pb-2 text-sm sm:text-base links">
                <motion.span
                  variants={projectVariants}
                  animate="appear"
                  whileHover={{ rotate: 2 }}
                  className="border border-black font-monocut py-1 px-3 highlight"
                >
                  <a href={github}>Github</a>
                </motion.span>
                <motion.span
                  variants={projectVariants}
                  animate="appear"
                  whileHover={{ rotate: 2 }}
                  className="border border-black font-monocut py-1 px-3 highlight ml-4"
                >
                  <a href={live}>Live Page</a>
                </motion.span>
                <motion.span
                  variants={projectVariants}
                  animate="appear"
                  whileHover={{ rotate: 2 }}
                  className="border border-black font-monocut py-1 px-3 highlight ml-4"
                >
                  <a href={demo}>Video Demo</a>
                </motion.span>
              </div>
              <div className="p-2 text-center mt-5">
                <p className="text-xs  font-monocut w-8/12  mx-auto">
                  {description1}
                </p>
                <br></br>
                <p className="z-40 text-xs  font-monocut w-8/12  mx-auto pb-5">
                  {description2}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* put title of whichever project comes last here to prevent double clouds */}
        {/*         {title != "TRACK" && (
          <div class="hidden sm:block custom-shape-divider-bottom-project">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        )} */}
        <div class="hidden sm:block custom-shape-divider-bottom-1619603492">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
