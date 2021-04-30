import React from "react";
import Logo from "../Assets/logo_cropped_white.png";
import {
  TwitterLogo,
  GithubLogo,
  PencilLine,
  LinkedinLogo,
} from "phosphor-react";

const Footer = (props) => {
  return (
    <footer className="relative">
      <div className="custom-shape-divider-bottom-1619602937 -mb-1">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer bg-neon-purple font-monocut text-sm px-1 sm:px-5 py-2 flex justify-between">
        <ul className="flex">
          <a
            href="https://github.com/sanspanic"
            className="ml-3 sm:ml-4 text-white hover:text-neon-yellow transition ease-in-out duration-500"
          >
            <GithubLogo size={24} />
          </a>
          <a
            href="https://dev.to/sanspanic"
            className="ml-3 sm:ml-4 text-white hover:text-neon-yellow transition ease-in-out duration-500"
          >
            <PencilLine size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sandra-spanikova-6738aa1b7/"
            className="ml-3 sm:ml-4 text-white hover:text-neon-yellow transition ease-in-out duration-500"
          >
            <LinkedinLogo size={24} />
          </a>
          <a
            href="https://twitter.com/sansPanicDev"
            className="ml-3 sm:ml-4 text-white hover:text-neon-yellow transition ease-in-out duration-500"
          >
            <TwitterLogo size={24} />
          </a>
        </ul>
        <img alt="logo" className="inline ml-auto h-8" src={Logo}></img>
      </div>
    </footer>
  );
};

export default Footer;
