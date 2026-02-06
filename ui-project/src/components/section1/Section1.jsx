import React from "react";
import Navbar from "./Navbar/Navbar";
import Firstscreen from "./Firstscreen";

const Section1 = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <Firstscreen />
    </div>
  );
};

export default Section1;
