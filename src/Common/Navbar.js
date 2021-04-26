import React from "react";
import Logo from "../Assets/croppedLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar py-2 bg-conic-yellow flex justify-between items-center font-monocut px-5 border-b">
      <ul>
        <img width="200" src={Logo}></img>
      </ul>
      <ul className="flex">
        <NavLink className="px-3" exact to="/">
          Welcome
        </NavLink>
        <NavLink to="about" className="px-3">
          About
        </NavLink>
        <NavLink to="projects" className="px-3">
          Projects
        </NavLink>
        <NavLink to="writing" className="px-3">
          Writing
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
