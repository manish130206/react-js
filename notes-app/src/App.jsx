import React, { useState } from "react";
import "./index.css";
import { Delete } from "lucide-react";

const App = () => {
  const [msg, setMsg] = useState("");
  const [totalTakes, setTotalTakes] = useState([]);

  const Add = (e) => {
    e.preventDefault();
    const copyTask = [...totalTakes];
    copyTask.push({ msg });
    setTotalTakes(copyTask);
    setMsg("");
  };

  const Remove = (idx) => {
    const copyTask = [...totalTakes];
    copyTask.splice(idx, 1);
    setTotalTakes(copyTask);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <div className="bg-linear-to-br from-white to-blue-50 h-[80%] w-[50%] flex flex-col items-center gap-5 rounded-2xl shadow-2xl border border-blue-100">
        <div className="mt-5 flex items-center gap-3">
          <img
            className="object-fill w-16 h-12"
            src="https://static.vecteezy.com/system/resources/previews/068/590/526/non_2x/pocket-notebook-pen-notes-journal-writing-diary-on-white-background-free-vector.jpg"
            alt="Notes Logo"
          />
          <h1 className="flex text-4xl font-bold justify-center bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
            Notes It !!!
          </h1>
        </div>

        <form
          onSubmit={(e) => {
            Add(e);
          }}
          className="w-full flex justify-center gap-2 px-6"
        >
          <input
            className="bg-white h-12 px-6 outline-none w-[70%] rounded-2xl text-gray-800 
            border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
            transition-all duration-200 placeholder-gray-400"
            type="text"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            placeholder="Enter Your Notes"
          />

          <button
            className="bg-linear-to-r from-blue-500 to-indigo-500 text-white h-12 px-4 rounded-2xl 
          w-[20%] hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 font-medium
          shadow-md hover:shadow-lg active:scale-95"
          >
            Add
          </button>
        </form>

        <div className="w-[90%] h-0.5 bg-linear-to-r from-transparent via-blue-300 to-transparent my-1"></div>

        <h1 className="text-2xl font-bold text-gray-800">Recent Notes</h1>

        {totalTakes.length > 0 && (
          <div className="flex flex-col w-[90%] items-center py-2 gap-3 overflow-y-auto max-h-[45%] overflow-x-hidden pr-2 no-scrollbar">
            {totalTakes.map((ele, idx) => (
              <div
                key={idx}
                className="w-full flex justify-between gap-3 items-center px-4 py-3 rounded-2xl 
                bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm 
                hover:shadow-lg hover:border-blue-300 transition-all duration-200 group"
              >
                <h1 className="text-lg font-medium text-gray-800">{ele.msg}</h1>

                <button
                  onClick={() => Remove(idx)}
                  className="bg-linear-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl 
                  hover:from-red-600 hover:to-pink-600 transition-all duration-200 font-medium
                  shadow-sm hover:shadow-md active:scale-95 flex items-center gap-2"
                >
                  <Delete size={18} />
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {totalTakes.length === 0 && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-lg">
                No notes yet. Add your first note above!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
