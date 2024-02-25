"use client";
import React, { useState } from "react";

const LogIn = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="relative">
      {/* Element  */}
      <div
        className="flex justify-center items-center flex-col "
        onClick={() => (login ? setLogin(false) : setLogin(true))}
      >
        <button className="flex items-center fill-white hover:fill-red-400 hover:text-red-400 hover:underline">
          <a className="hidden md:block">Akshay</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-3  ml-1"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
      {/* logout  */}
      <div
        className={`w-fit h-fit right-1 border-blue-400 top-10 p-2 text-xs bg-slate-500 bg-opacity-80 ${
          login ? "hidden" : "absolute"
        }`}
      >
        <div className="h-fit flex justify-center items-center flex-col">
          <p className="text-center"> Akshay Hallagade </p>
          <button className="h1-fit w-fit p-1 bg-orange-500 mt-2">
            <a href="./">Log out</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
