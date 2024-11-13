import React, { useState } from "react";
import { Link } from "react-router-dom";

import EyeOpen from "../assets/eyeopen.svg";
import EyeClosed from "../assets/eyeclosed.svg";
import Back from "../assets/login.svg";
import Google from "../assets/google.svg";

const B = () => {
  const [eyeBtn, setEyeBtn] = useState(false);

  const handleEye = () => {
    setEyeBtn(!eyeBtn);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-slate-800">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg w-2/5 mt-10 p-7 gap-5 font-mono shadow-lg">
        <div className="text-xl font-bold underline w-full text-center">
          <h1 className="text-gray-700">Create</h1>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="userID" className="text-gray-600">
            Enter Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="userID"
            className="p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="userID" className="text-gray-600">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter email ID"
            id="userID"
            className="p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-indigo-500"
          />
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
        <div className=" w-full flex flex-row justify-center items-center gap-5">
          <div className="flex flex-row gap-2 ml-1 items-center w-1/2 text-gray-700 border-r-2 border-indigo-500">
            <span>Create with Google:</span>
            <Link>
              <img
                src={Google}
                alt="Google"
                className="hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
          <button
            className="text-center p-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 hover:scale-105 transition-all duration-500 w-1/2"
            onClick={() => alert("Logging in...")}
          >
            LOGIN
          </button>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-4 text-gray-700">
          <span>Already a User:</span>
          <Link to={'/'}>
            <img
              src={Back}
              alt="Create User"
              className="hover:scale-110 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default B;
