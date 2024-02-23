import React from "react";

const Clock = () => {
  return (
    <div className="h-fit w-fit text-white text-center flex justify-center items-center flex-col">
      <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl  border-slate-300 border-b-2 cursor-default">
        06:32
        <a className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300">
          :23
        </a>
      </h1>
      <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 cursor-default">
        Good Evening, Akshay
      </h4>
    </div>
  );
};

export default Clock;
