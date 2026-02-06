import React from "react";
import Leftpart from "./Leftpart";
import Rightpart from "./Rightpart";

const Firstscreen = () => {
  return (
    <div className="flex flex-1 gap-5 m-4 mb-0 w-full h-[calc(100vh-80px)] items-center px-10 overflow-hidden">
      <Leftpart />
      <Rightpart />
    </div>
  );
};

export default Firstscreen;
