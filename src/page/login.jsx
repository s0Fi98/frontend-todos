import React, { useState } from "react";
import { Link } from "react-router-dom";

import Create from "../assets/create.svg";
import EyeOpen from "../assets/eyeopen.svg";
import EyeClosed from "../assets/eyeclosed.svg";

const A = () => {
  const [eyeBtn, setEyeBtn] = useState(false);

  const handleEye = () => {
    setEyeBtn(!eyeBtn);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-slate-800">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg w-2/5 mt-28 p-7 gap-5 font-mono shadow-lg">
        <div className="text-xl font-bold underline w-full text-center">
          <h1 className="text-gray-700">Login</h1>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="userID" className="text-gray-600">
            User ID:
          </label>
          <input
            type="text"
            placeholder="Enter User ID"
            id="userID"
            className="p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="password" className="text-gray-600">
            Password:
          </label>
          <div className="flex flex-row w-full relative">
            <input
              type={eyeBtn ? "text" : "password"}
              placeholder="Enter Password"
              id="password"
              className="p-2 rounded-lg border-2 border-gray-400 w-full focus:outline-none focus:border-indigo-500"
            />
            <Link
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={handleEye}
            >
              <img
                src={eyeBtn ? EyeOpen : EyeClosed}
                alt="Toggle Password Visibility"
              />
            </Link>
          </div>
        </div>
        <button
          className="w-full text-center p-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 hover:scale-105 transition-all duration-500"
          onClick={() => alert("Logging in...")}
        >
          LOGIN
        </button>
        <div className="w-full text-end text-sm">
          <h5 className="underline hover:cursor-pointer hover:text-indigo-500">
            Forgot Password?
          </h5>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-4">
          <span>Create User:</span>
          <Link to="/create">
            <img
              src={Create}
              alt="Create User"
              className="hover:scale-110 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default A;
