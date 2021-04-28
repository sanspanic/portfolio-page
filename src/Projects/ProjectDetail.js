import React from "react";
import Postgres from "../SVGs/Stack/Postgres";
import Python from "../SVGs/Stack/Python";
import JavaScript from "../SVGs/Stack/JavaScript";
import Node from "../SVGs/Stack/Node";
import Flask from "../SVGs/Stack/Flask";
import ReactSVG from "../SVGs/Stack/React";
import Tailwind from "../SVGs/Stack/Tailwind";
import Jest from "../SVGs/Stack/Jest";

const ProjectDetail = ({
  title,
  description1,
  description2,
  src,
  javascript,
  react,
  jest,
  tailwind,
}) => {
  return (
    <>
      <div className="relative h-screen flex items-center">
        <div className=" -mt-20 mx-auto w-9/12">
          <h2 className="font-monofett tracking-widest font-bold text-6xl text-center my-10">
            {title}
          </h2>
          <div className="flex">
            {" "}
            <img className="w-5/12" src={src}></img>
            <div className="w-7/12 ">
              <div className="flex justify-evenly items-center  py-2">
                <span className="border border-black font-monocut py-1 px-3 highlight hover:cursor-pointer">
                  Github
                </span>
                <span className="border border-black font-monocut py-1 px-3 highlight hover:cursor-pointer">
                  Live Page
                </span>
                <span className="border border-black font-monocut py-1 px-3 highlight hover:cursor-pointer">
                  Video Demo
                </span>
              </div>
              <div className="flex justify-evenly items-center py-2 mt-5">
                {javascript && <JavaScript className="w-8" />}
                {react && <ReactSVG className="w-8" />}
                {jest && <Jest className="w-8" />}
                {tailwind && <Tailwind className="w-8" />}
              </div>
              <div className="p-2 text-center mt-5">
                <p className="text-sm font-monocut w-6/12 mx-auto">
                  {description1}
                </p>
                <br></br>
                <p className="text-sm font-monocut w-6/12 mx-auto">
                  {description2}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1619603492">
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
