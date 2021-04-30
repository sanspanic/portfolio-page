import React from "react";
import Timeline from "./Timeline";
import CodingBulletPoints from "./CodingBulletPoints";
import Footer from "../Common/Footer";

const About = () => {
  return (
    <>
      <div className="flex-grow font-monocut px-5 sm:px-3 mb-40 sm:mb-60">
        <h1 className="text-2xl font-roboto font-bold text-center py-10">
          {" "}
          Who am I?
        </h1>
        <CodingBulletPoints />
        <Timeline />
      </div>
      <Footer />
    </>
  );
};

export default About;
