"use client";
import React, { useEffect, useState } from "react";
import {
  CurrentLocation,
  Direction,
  Edit,
  NotCurrentLocation,
} from "@/app/utils/icons";
import { sendError } from "next/dist/server/api-utils";

const WeatherCard = ({ SendToTopCard }) => {
  const [geoLocationStatus, setGeoLocationStatus] = useState(false);
  const [tomorrowWeather, setTomorrowWeather] = useState(false);
  const [geoLocation, setGeoLocation] = useState("");
  const [cityKeyword, updateKeyword] = useState("");
  const [editCity, setEditCity] = useState(false);
  const [apiData, setData] = useState({});

  const updateCity = (e) => {
    e.preventDefault();
    setEditCity(false);
    setGeoLocationStatus(true);
    setGeoLocation(cityKeyword);
  };

  // Get Geolocation and update the location Data
  useEffect(() => {
    if (!geoLocationStatus) {
      const fetchLocation = async () => {
        try {
          if (typeof window !== "undefined" && "geolocation" in navigator) {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const { latitude, longitude } = position.coords;
            console.log(`${latitude},${longitude}`);
            setGeoLocation(`${latitude},${longitude}`);
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
        } catch (error) {
          console.error("Error getting geolocation:", error);
        }
      };
      fetchLocation(); // Call the fetchLocation function
    }
  }, [geoLocationStatus]);

  // Get the data for Location Or City Entered
  const endpoints = "https://api.weatherapi.com/v1/forecast.json";
  const apiKey = "9d162c098b9f4d34a6a74901233012";
  useEffect(() => {
    if (geoLocation) {
      const fetchData = () =>
        fetch(
          `${endpoints}?key=${apiKey}&q=${geoLocation}&days=1&aqi=no&alerts=no`
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setData(res);
          });

      fetchData();
    }
  }, [endpoints, apiKey, geoLocation]);

  useEffect(() => {
    if (Object.keys(apiData) !== 0) {
      SendToTopCard(apiData);
    }
  }, [SendToTopCard, apiData]);

  return (
    <div className="px-4 py-6 min-w-48">
      {/* Location City */}
      <div className="relative">
        <div className="flex gap-6 items-center justify-between ">
          <div className="flex w-fit items-center gap-2">
            <p className="w-fit text-lg  delay-200 duration-200 text-nowrap">
              {Object.keys(apiData).length === 0
                ? "Loading..."
                : apiData.location.name}
            </p>
            <div onClick={() => setEditCity(true)}>
              <Edit className="hover:fill-red-600" />
            </div>
          </div>
          {geoLocationStatus ? (
            <CurrentLocation
              size={25}
              color="white"
              className="hover:fill-red-600"
              onClick={() => setGeoLocationStatus(false)}
            />
          ) : (
            <NotCurrentLocation size={25} className="fill-gray-500" />
          )}
        </div>
        <form onSubmit={updateCity}>
          <input
            className={`absolute top-0 h-full left-0 w-full bg-gray-600 border-b-2 placeholder:text-sm p-2 outline-none ${
              editCity ? "visible" : "invisible"
            }`}
            type="text"
            placeholder="Enter City Name "
            onChange={(e) => updateKeyword(e.target.value)}
            value={cityKeyword}
          />
        </form>
      </div>
      {/*  Tomorrow */}
      <div className="flex text-xs gap-2 mt-2">
        <button
          className={tomorrowWeather ? "text-white" : "text-red-400"}
          onClick={() => setTomorrowWeather(!tomorrowWeather)}
        >
          Today
        </button>
        <button
          className={tomorrowWeather ? "text-red-400" : "text-white"}
          onClick={() => setTomorrowWeather(!tomorrowWeather)}
        >
          Tomorrow
        </button>
      </div>
      {/* Text and Img */}
      <div className="flex">
        <p className="text-base text-slate-200 mt-5">
          {Object.keys(apiData).length === 0
            ? "..."
            : tomorrowWeather
            ? apiData.forecast.forecastday[0].day.condition.text
            : apiData.current.condition.text}
        </p>
        <img
          className="w-15"
          src={
            Object.keys(apiData).length === 0
              ? ""
              : tomorrowWeather
              ? apiData.forecast.forecastday[0].day.condition.icon
              : apiData.current.condition.icon
          }
          alt="img"
        />
      </div>
      {/* Temperature */}
      <div className="flex">
        <h3 className="text-5xl py-2 font-medium">
          {Object.keys(apiData).length === 0
            ? "..."
            : tomorrowWeather
            ? apiData.forecast.forecastday[0].day.avgtemp_c
            : apiData.current.feelslike_c}
          °
        </h3>
      </div>
      {/*  Extraa Detailes */}
      <ul className="py-2">
        {/* Humidity */}
        <li className="text-xs text-slate-300 text-nowrap flex gap-2">
          <p>Humidity:</p>

          <p>
            {Object.keys(apiData).length === 0
              ? "..."
              : tomorrowWeather
              ? apiData.forecast.forecastday[0].day.avghumidity
              : apiData.current.humidity}
          </p>
        </li>
        {/* // Precipitation */}
        <li className="text-xs text-slate-300 text-nowrap flex gap-2">
          <p>Precipitation:</p>
          <p>
            {Object.keys(apiData).length === 0
              ? "..."
              : tomorrowWeather
              ? apiData.forecast.forecastday[0].day.daily_chance_of_rain
              : apiData.current.precip_in}
            mm
          </p>
        </li>
        {/* // Wind Speed and Direction */}
        <li className="text-xs text-slate-300 text-nowrap flex  gap-2 items-center">
          <p>Wind:</p>
          <a>
            {Object.keys(apiData).length === 0
              ? "..."
              : tomorrowWeather
              ? apiData.forecast.forecastday[0].day.maxwind_kph
              : apiData.current.wind_kph}
            Km/h
          </a>{" "}
          <Direction
            size={25}
            style={{
              transform: `rotate(${
                Object.keys(apiData).length === 0
                  ? 0
                  : tomorrowWeather
                  ? apiData.forecast.forecastday[0].hour[14].wind_degree
                  : apiData.current.wind_degree
              }deg)`,
            }}
          />
        </li>
        {/* // UV  */}
        <li className="text-xs text-slate-300 text-nowrap flex gap-2 ">
          <p>UV :</p>
          <p>
            {Object.keys(apiData).length === 0
              ? "..."
              : tomorrowWeather
              ? apiData.forecast.forecastday[0].day.uv
              : apiData.current.uv}
            Km/h
          </p>
        </li>
        {/* Visual KM */}
        <li className="text-xs text-slate-300 text-nowrap flex gap-2">
          <p>Visual KM :</p>
          <>
            {Object.keys(apiData).length === 0
              ? "..."
              : tomorrowWeather
              ? apiData.forecast.forecastday[0].day.avgvis_km
              : apiData.current.vis_km}
            Km/h
          </>
        </li>
      </ul>
    </div>
  );
};

const Weather = () => {
  const [showWeather, setShowWeather] = useState(false);
  const [outerCardData, setOuterCardData] = useState({});

  const innerCardData = (data) => {
    console.log(data);
    setOuterCardData(data);
  };

  return (
    <div className="relative cursor-pointer">
      <div onClick={() => setShowWeather(!showWeather)}>
        <div className="flex items-center">
          <div>
            <img
              className="w-10"
              src={
                Object.keys(outerCardData).length === 0
                  ? ""
                  : outerCardData.current.condition.icon
              }
              alt=""
            />
          </div>
          <div>
            <p className="text-center font-medium text-xl">
              {Object.keys(outerCardData).length === 0
                ? ""
                : `${outerCardData.current.feelslike_c}°`}
            </p>
            <p className="text-xs">
              {Object.keys(outerCardData).length === 0
                ? ""
                : outerCardData.location.name}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          showWeather ? "absolute" : "hidden"
        } text-white text-base right-0 top-12 bg-slate-800 bg-opacity-70 shadow-sm shadow-slate-400 z-10`}
      >
        <WeatherCard SendToTopCard={innerCardData} />
      </div>
    </div>
  );
};

export default Weather;
