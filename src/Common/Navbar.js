import React from "react";
import Logo from "../Assets/croppedLogo.png";
import { NavLink } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useViewportScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0px", "100%"]);

  console.log("Are you...checking for errors? ");
  console.log("Rude.");
  console.log(`────────▓▓▓▓▓▓▓────────────▒▒▒▒▒▒
  ──────▓▓▒▒▒▒▒▒▒▓▓────────▒▒░░░░░░▒▒
  ────▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓────▒▒░░░░░░░░░▒▒▒
  ───▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒░░░░░░░░░░░░░░▒
  ──▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░▒
  ──▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░▒
  ─▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░▒
  ▓▓▒▒▒▒▒▒░░░░░░░░░░░▒▒░░▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒
  ▓▓▒▒▒▒▒▒▀▀▀▀▀███▄▄▒▒▒░░░▄▄▄██▀▀▀▀▀░░░░░░▒
  ▓▓▒▒▒▒▒▒▒▄▀████▀███▄▒░▄████▀████▄░░░░░░░▒
  ▓▓▒▒▒▒▒▒█──▀█████▀─▌▒░▐──▀█████▀─█░░░░░░▒
  ▓▓▒▒▒▒▒▒▒▀▄▄▄▄▄▄▄▄▀▒▒░░▀▄▄▄▄▄▄▄▄▀░░░░░░░▒
  ─▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░▒
  ──▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░▒
  ───▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▀▀░░░░░░░░░░░░░░▒
  ────▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░▒▒
  ─────▓▓▒▒▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▄░░░░░░░░▒▒
  ──────▓▓▒▒▒▒▒▒▒▄▀▀▀▀▀▀▀▀▀▀▀▄░░░░░▒▒
  ───────▓▓▒▒▒▒▒▀▒▒▒▒▒▒░░░░░░░▀░░░▒▒
  ────────▓▓▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░▒▒
  ──────────▓▓▒▒▒▒▒▒▒▒▒░░░░░░░░▒▒
  ───────────▓▓▒▒▒▒▒▒▒▒░░░░░░░▒▒
  ─────────────▓▓▒▒▒▒▒▒░░░░░▒▒
  ───────────────▓▓▒▒▒▒░░░░▒▒
  ────────────────▓▓▒▒▒░░░▒▒
  ──────────────────▓▓▒░▒▒
  ───────────────────▓▒░▒
  ────────────────────▓▒
  `);

  return (
    <>
      <nav className="navbar py-4 sm:py-2 bg-gradient-navbar flex justify-between items-center font-roboto font-light px-5 border-b tracking-widest">
        <ul>
          <img
            alt="logo"
            className="hidden md:inline"
            width="200"
            src={Logo}
          ></img>
        </ul>
        <ul className="flex text-white justify-evenly sm:text-base text-sm">
          <NavLink className="px-3 " exact to="/">
            Welcome
          </NavLink>
          <NavLink to="/about" className="px-3">
            About
          </NavLink>
          <NavLink to="/projects" className="px-3">
            Projects
          </NavLink>
          <NavLink to="/writing" className="px-3">
            Writing
          </NavLink>
        </ul>
      </nav>
      <motion.div
        style={{ width }}
        className="h-2 bg-gradient-navbar sticky top-0 z-50 overflow-hidden font-monocut text-right"
      >
        <span className="py-2text-sm tracking-widest"></span>
      </motion.div>
    </>
  );
};

export default Navbar;
