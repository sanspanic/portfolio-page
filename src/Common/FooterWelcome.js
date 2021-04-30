import React from "react";
import Logo from "../Assets/logo_cropped_white.png";
import {
  TwitterLogo,
  GithubLogo,
  PencilLine,
  LinkedinLogo,
} from "phosphor-react";
import { motion } from "framer-motion";

const Footer = (props) => {
  const imgVariants = {
    floatRight: {
      scale: 1.1,
      x: 50,

      transition: {
        yoyo: Infinity,
        duration: 3,
      },
    },
    floatLeft: {
      scale: 1.1,
      x: -50,
      transition: {
        yoyo: Infinity,
        duration: 3,
      },
    },
  };
  console.log(props);

  return (
    <footer className="relative">
      <div class="custom-shape-divider-bottom-1619602937">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            variants={imgVariants}
            animate="floatRight"
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></motion.path>

          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
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
        <img alt="logo" className="inline w-40" src={Logo}></img>
      </div>
    </footer>
  );
};

export default Footer;
