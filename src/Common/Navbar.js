import React from "react";
import Logo from "../Assets/croppedLogo.png";
/* import Logo from "../Assets/logo_cropped_white.png"; */
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
