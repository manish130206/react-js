import React from "react";
import Navbarleft from "./Navbarleft";
import Navbarright from "./Navbarright";
import Navbarmiddle from "./Navbarmiddle";

const Navbar = () => {
  return (
    <div className="flex w-full h-16 mt-1.5 mb-1.5 items-center justify-between px-10 py-4 bg-white gap-15">
      <Navbarleft />
      <Navbarmiddle />
      <Navbarright />
    </div>
  );
};

export default Navbar;
