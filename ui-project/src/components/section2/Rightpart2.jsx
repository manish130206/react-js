import React from "react";
import GridComponent from "./GridComponent";

const Rightpart2 = () => {
  return (
    <>
      <div className="flex flex-col gap-3 p-8 pt-0">
        <h1 className="text-5xl font-bold leading-tight text-slate-900">
          Travel Around the world
        </h1>
        <p className="font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          maxime consectetur in, explicabo ut veniam aperiam laborum nisi sequi
          nam ratione voluptates tempora accusantium dolore iste natus,
          praesentium amet ex.
        </p>
        <GridComponent />
      </div>
    </>
  );
};

export default Rightpart2;
