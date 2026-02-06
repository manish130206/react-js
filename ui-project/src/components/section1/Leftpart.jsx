import React from "react";

const Leftpart = () => {
  return (
    <div className="h-full flex flex-col justify-center w-[31%] p-12 gap-6">
      <h1 className="text-5xl font-bold leading-tight text-slate-900">
        Manifesting your <br />
        Travel Dreams!
      </h1>
      <p className="text-lg w-[85%] font-medium text-gray-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
        accusantium quasi velit aliquam incidunt magnam, dicta facilis expedita
        consectetur sint!
      </p>
      <div className="flex">
        <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Leftpart;
