import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import EyeOpen from "../assets/eyeopen.svg";
import EyeClosed from "../assets/eyeclosed.svg";
import Back from "../assets/login.svg";
import Google from "../assets/google.svg";

const B = () => {
  const navigate = useNavigate();
  const [eyeBtn, setEyeBtn] = useState(false);

  const handleEye = () => {
    setEyeBtn(!eyeBtn);
  };

  const loginThroughGoogle = () => {
    alert("created through google");
  };

  // const [storedData, setStoredData] = useState({
  //   name: "",
  //   email: "",
  //   userId: "",
  //   password: "",
  // })

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    userId: "",
    password: "",
  });

  const saveData = (e) => {
    e.preventDefault();
    // setStoredData({...signupData})
    if (signupData.name && signupData.email && signupData.userId && signupData.password) {
      sessionStorage.setItem("userId", signupData.userId)
      sessionStorage.setItem("password", signupData.password)
      navigate('/')
    } else{console.log('Cant store data...', e)}
  };

  // ----- Enter key logic -----
  const emailRef = useRef(null);
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  const handlePress = (e) => {
    if (e.key === "Enter") {
      if (e.target.id === "name") {
        emailRef.current.focus();
      } else if (e.target.id === "email") {
        userRef.current.focus();
      } else if (e.target.id === "userId") {
        passwordRef.current.focus();
      } else if (e.target.id === "password") {
        saveData();
      }
    }
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
            id="name"
            className="p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-indigo-500"
            value={signupData.name}
            onChange={(e) =>
              setSignupData({ ...signupData, name: e.target.value })
            }
            onKeyDown={handlePress}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="userID" className="text-gray-600">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter email ID"
            id="email"
            className="p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-indigo-500"
            value={signupData.email}
            onChange={(e) =>
              setSignupData({ ...signupData, email: e.target.value })
            }
            onKeyDown={handlePress}
            ref={emailRef}
          />
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
            value={signupData.userId}
            onChange={(e) =>
              setSignupData({ ...signupData, userId: e.target.value })
            }
            onKeyDown={handlePress}
            ref={userRef}
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
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              onKeyDown={handlePress}
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
        <div className=" w-full flex flex-row justify-center items-center gap-5">
          <div className="flex flex-row gap-2 ml-1 items-center w-1/2 text-gray-700 border-r-2 border-indigo-500">
            <span>Create with Google:</span>
            <Link>
              <img
                src={Google}
                alt="Google"
                className="hover:scale-110 transition-all duration-300"
                onClick={loginThroughGoogle}
              />
            </Link>
          </div>
          <button
            className={`text-center p-2 text-white rounded-lg w-1/2
              ${
                !signupData.name ||
                !signupData.email ||
                !signupData.userId ||
                !signupData.password
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-slate-600 hover:bg-slate-700 hover:scale-105 transition-all duration-500"
              }`}
            onClick={saveData}
            disabled={
              !signupData.name ||
              !signupData.email ||
              !signupData.userId ||
              !signupData.password
            }
          >
            LOGIN
          </button>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-4 text-gray-700">
          <span>Already a User:</span>
          <Link to={"/"}>
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
