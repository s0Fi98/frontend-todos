import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import Create from "../assets/create.svg";
import EyeOpen from "../assets/eyeopen.svg";
import EyeClosed from "../assets/eyeclosed.svg";

const A = () => {
  const navigate = useNavigate();

  const [eyeBtn, setEyeBtn] = useState(false);
  const handleEye = () => {
    setEyeBtn(!eyeBtn);
  };

  const defaultUserId = sessionStorage.getItem("userId");
  const defaultPassword = sessionStorage.getItem("password");
  
  const [loginData, setLoginData] = useState({
    userId: "",
    password: "",
  });
  const processLogin = (event) => {
    event.preventDefault();
    if (loginData.userId === defaultUserId && loginData.password === defaultPassword) {
      sessionStorage.setItem('userId', loginData.userId);
      navigate('/main')
    } else {
      alert("Kaun hoon bae?")
    }
  };

  const passwordRef = useRef(null);
  const runOnClick = (e) => {
    if (e.key === "Enter") {
      if (e.target.id === "userId") {
        passwordRef.current.focus();
      } else if (e.target.id === "password") {
        processLogin(e);
      }
    }
  };

  // ----- Button disabled logic -----
  const isBtnDisable = !loginData.userId || !loginData.password;
  const disabledClass = isBtnDisable ? "bg-gray-400 cursor-not-allowed" : "bg-slate-600 hover:bg-slate-700 hover:scale-105 transition-all duration-500 "

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
            id="userId"
            className="p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-indigo-500"
            value={loginData.userId}
            onChange={(e) =>
              setLoginData({ ...loginData, [e.target.id]: e.target.value })
            }
            onKeyDown={runOnClick}
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
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, [e.target.id]: e.target.value })
              }
              onKeyDown={runOnClick}
              ref={passwordRef}
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
        <div className="w-full text-end text-xs font-medium text-gray-600">
          <h5 className="underline hover:cursor-pointer hover:text-indigo-500">
            Forgot Password?
          </h5>
        </div>
        <button
          className={`w-full text-center p-2 text-white rounded-lg transition-all duration-500 ${disabledClass}`}
          aria-disabled={isBtnDisable}
          disabled={isBtnDisable}
          onClick={processLogin}
        >
          LOGIN
        </button>

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
