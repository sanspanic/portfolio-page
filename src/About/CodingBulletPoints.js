import React from "react";
import {
  MagnifyingGlass,
  GraduationCap,
  Lightbulb,
  RocketLaunch,
} from "phosphor-react";

const CodingBulletPoints = () => {
  return (
    <div className="max-w-prose mx-auto">
      <p className="bg-faded-white rounded-full">
        I discovered coding a bit later in life than most. Despite this, I find
        it's{" "}
        <span className="highlight font-open font-bold">a perfect match</span>{" "}
        for me, because it allows me to act out 4 drivers I've always
        experienced as motivating, and found myself to be especially good at,
        namely:
      </p>
      <br></br>
      <div className="mx-auto w-7/12 bg-faded-white p-4 fancy-border mt-5">
        <ul className="text-xl font-roboto tracking-widest font-bold leading-loose">
          <li className="flex items-center">
            <span className="col-span-1">
              <MagnifyingGlass className="text-neon-purple inline" size={27} />
            </span>
             <span className="justify-self-end"> Analytical thinking</span>
          </li>
          <li className="flex items-center">
            <Lightbulb size={27} className="text-neon-purple inline" /> 
            <span> Creative problem-solving</span>
          </li>
          <li className="flex items-center">
            <RocketLaunch size={27} className="text-neon-purple inline" /> 
            <span> Striving for efficiency</span>
          </li>
          <li className="flex items-center">
            <GraduationCap size={27} className="text-neon-purple inline" />
             <span> Continuous learning</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CodingBulletPoints;
