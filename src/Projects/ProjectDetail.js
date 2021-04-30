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
  const [clickedOpacity, setClickedOpacity] = useState(1);

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
    }, [600]);
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
    }, [600]);
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
      <div className="relative h-screen flex items-center mt-20">
        <div className="pt-10 sm:pt-0 sm:-mt-60 mx-auto w-11/12 lg:w-9/12 fancy-border bg-faded-white">
          <div className="flex justify-between items-start sm:items-center mx-auto carousel">
            <button className="sm:ml-10 md:ml-20" onClick={handlePrevious}>
              <ArrowSquareLeft size={48} />
            </button>
            <h2 className="inline font-monofett tracking-widest font-bold text-4xl sm:text-5xl lg:text-6xl text-center mb-10 sm:my-10">
              {title}
            </h2>
            <button className="sm:mr-10 md:mr-20" onClick={handleNext}>
              <ArrowSquareRight size={48} />
            </button>
          </div>
          <hr className="mx-40 border-black"></hr>

          <motion.div
            animate={{
              opacity: [1, clickedOpacity, 1],
              transition: { duration: 0.7 },
            }}
            className="flex flex-col sm:flex-row items-center bg-faded-white"
          >
            {" "}
            <div className="w-9/12 sm:w-4/12 pt-5 sm:pt-0">
              <img alt="project mockup" className="mockup-img" src={src}></img>
            </div>
            <div className="sm:w-8/12">
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
                <p className="text-xs sm:text-sm  font-monocut w-8/12  mx-auto">
                  {description1}
                </p>
                <br></br>
                <p className="z-40 text-xs sm:text-sm font-monocut w-8/12  mx-auto pb-5">
                  {description2}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hidden sm:block custom-shape-divider-bottom-1619603492">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
