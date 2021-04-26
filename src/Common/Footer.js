import React from "react";
import Logo from "../Assets/logo_cropped_white.png";
import {
  TwitterLogo,
  GithubLogo,
  PencilLine,
  LinkedinLogo,
} from "phosphor-react";
import Waves from "../SVGs/Waves";

const Footer = () => {
  return (
    <>
      <Waves />
      <div className="footer bg-neon-purple font-monocut text-sm px-5 py-2 flex justify-between">
        <ul className="flex">
          <a
            href="https://github.com/sanspanic"
            className="ml-4 text-white hover:text-neon-purple transition ease-in-out duration-500"
          >
            <GithubLogo size={24} />
          </a>
          <a
            href="https://dev.to/sanspanic"
            className="ml-4 text-white hover:text-neon-purple transition ease-in-out duration-500"
          >
            <PencilLine size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sandra-spanikova-6738aa1b7/"
            className="ml-4 text-white hover:text-neon-purple transition ease-in-out duration-500"
          >
            <LinkedinLogo size={24} />
          </a>
          <a
            href="https://twitter.com/sansPanicDev"
            className="ml-4 text-white hover:text-neon-purple transition ease-in-out duration-500"
          >
            <TwitterLogo size={24} />
          </a>
        </ul>
        <img className="inline w-40" src={Logo}></img>
      </div>
    </>
  );
};

export default Footer;
