"use client";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [currTime, setCurrTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime(() => new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-fit w-fit text-white text-center flex justify-center items-center flex-col">
      <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl  border-slate-300 border-b-2 cursor-default z-10 relative">
        {`${String(currTime.getHours()).padStart(2, "0")}:${String(
          currTime.getMinutes()
        ).padStart(2, "0")}`}
        <a className="text-lg sm:text-base md:text-3xl lg:text-4xl text-slate-300 z-10a absolute bottom-0">
          {`:${String(currTime.getSeconds()).padStart(2, "0")}`}
        </a>
      </h1>
      <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 cursor-default z-10">
        Good Evening, Akshay
      </h4>
    </div>
  );
};

export default Clock;
