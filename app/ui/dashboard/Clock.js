"use client";
import { AdminNameContext } from "@/app/context/NameProvider";
import React, { useEffect, useState, useContext } from "react";

const Clock = () => {
  const nameProvider = useContext(AdminNameContext);
  const { adminName } = nameProvider;

  const [currTime, setCurrTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime(() => new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const giveGreeting = (currHours) => {
    let greeting = "";
    if (currHours < 12) greeting = "Good Morning";
    else if (currHours < 16) greeting = "Good Afternoon";
    else if (currHours < 21) greeting = "Good Evening";
    else greeting = "Sleep Now, Good Night";
    return greeting;
  };

  return (
    <div className="h-fit w-fit text-white text-center flex justify-center items-center flex-col">
      <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl  border-slate-300 border-b-2 cursor-default relative">
        {`${String(currTime.getHours()).padStart(2, "0")}:${String(
          currTime.getMinutes()
        ).padStart(2, "0")}`}
        <a className="text-lg sm:text-base md:text-3xl lg:text-4xl text-slate-300 absolute bottom-0">
          {`:${String(currTime.getSeconds()).padStart(2, "0")}`}
        </a>
      </h1>
      <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 cursor-default ">
        {`${giveGreeting(currTime.getHours())},${adminName}`}
      </h4>
    </div>
  );
};

export default Clock;
