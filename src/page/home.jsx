import React from "react";

import D from "./insert.jsx";
import E from "./card.jsx";
import Logo from "../assets/todo-logo.png";

const C = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-slate-800 font-mono">
      {/* Logo and Welcome Text */}
      <div className="flex flex-row justify-center items-center gap-3 p-2">
        <img
          src={Logo}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h5 className="font-medium text-lg text-indigo-300">Welcome, User</h5>
      </div>

      {/* Insert Component */}
      <D />

      {/* Created and Completed Tasks Section */}
      <div className="w-1/2 flex flex-row justify-between items-center p-1 mb-2">
        <div className="flex flex-row justify-between items-center gap-2 p-2 font-medium text-indigo-300 text-lg">
          <h5>Created Tasks</h5>
          <button
            type="button"
            className="cursor-pointer bg-white w-10 rounded-full p-1 hover:scale-110 transition-all duration-300"
          >
            0
          </button>
        </div>
        <div className="flex flex-row justify-between items-center gap-2 p-2 font-medium text-indigo-300 text-lg">
          <h5>Completed Tasks</h5>
          <button
            type="button"
            className="cursor-pointer bg-white rounded-full p-1 hover:scale-110 transition-all duration-300"
          >
            100
          </button>
        </div>
      </div>

      {/* Task Cards Section */}
      <div className="w-full flex flex-col gap-1">
        <E />
        <E />
      </div>
    </div>
  );
};

export default C;
