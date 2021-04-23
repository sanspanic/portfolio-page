import React from "react";
import Logo from "../Assets/croppedLogo.png";

const Navbar = () => {
  return (
    <nav className="py-1 bg-conic-yellow flex justify-between items-center font-monocut px-5">
      <ul>
        <img width="200" src={Logo}></img>
      </ul>
      <ul className="flex">
        <li className="px-3">About</li>
        <li className="px-3">Projects</li>
        <li className="px-3">Writing</li>
      </ul>
    </nav>
  );
};

export default Navbar;
