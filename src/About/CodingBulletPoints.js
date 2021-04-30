import React from "react";
import {
  MagnifyingGlass,
  GraduationCap,
  Lightbulb,
  RocketLaunch,
} from "phosphor-react";
import { motion } from "framer-motion";

const CodingBulletPoints = () => {
  return (
    <div className="max-w-prose mx-auto">
      <p className="bg-faded-white rounded-full mb-20">
        I discovered coding a bit later in life than most. Despite this, I find
        it's{" "}
        <span className="highlight font-open font-bold">a perfect match</span>{" "}
        for me, because it allows me to act out 4 drives I've always experienced
        as motivating, and found myself to be especially good at, namely:
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto sm:w-9/12 md:w-7/12 p-4 dev-card fancy-border mt-5"
      >
        <ul className="text-lg sm:text-xl  font-roboto tracking-widest font-bold leading-loose">
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
      </motion.div>
    </div>
  );
};

export default CodingBulletPoints;
