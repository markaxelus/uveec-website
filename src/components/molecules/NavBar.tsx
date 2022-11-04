import React from "react";
import { NavLink } from "../atoms";

export const NavBar = () => {
  return (
    <div className="z-50 flex flex-row items-center space-x-4">
      <NavLink name="Home" link="/" />
      <NavLink name="About" link="/about" />
      <NavLink name="Projects" link="/projects" />
      <NavLink name="Sponsors" link="/sponsors" />
      <NavLink name="Contact" link="/contact" />
    </div>
  );
};
