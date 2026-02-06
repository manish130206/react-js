import React from "react";

const GridComponent = () => {
  const items = ["Clients", "Partners", "On Going", "Approvals"];
  const names = ["2k", "3k+", "1k", "1k"];

  return (
    <div className="grid grid-cols-3 gap-4 h-60 w-180">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg"
        >
          <span className="text-2xl font-bold text-blue-600">
            {names[index]}
          </span>

          <span className="text-gray-500 font-medium">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
