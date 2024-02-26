"use client";
import React, { useState } from "react";

const WeatherCard = () => {
  return (
    <div className="p-2 w-40">
      <p className="text-lg">Wardha</p>
      <p className="text-base text-slate-200">clear</p>
      <div className="flex">
        <h3 className="text-5xl py-2 font-medium">26°</h3>
      </div>
      <ul className="py-2">
        <li className="text-xs text-slate-300">
          Feels Like: <a> 25°</a>
        </li>
        <li className="text-xs text-slate-300">
          Recent rain: <a> 0 mm</a>
        </li>
        <li className="text-xs text-slate-300">
          Wind: <a>9 Km/h</a>
        </li>
      </ul>
    </div>
  );
};

const Weather = () => {
  const [showWeather, setShowWeather] = useState(false);
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => setShowWeather((prevShowWeather) => !prevShowWeather)}
    >
      <p className="text-center font-medium text-xl">26°</p>
      <p className="text-xs">Wardha</p>
      <div
        className={`${
          showWeather ? "absolute" : "hidden"
        } text-white text-base right-0 bg-slate-800 bg-opacity-70 shadow-sm shadow-slate-400 z-10`}
      >
        <WeatherCard />
      </div>
    </div>
  );
};

export default Weather;
