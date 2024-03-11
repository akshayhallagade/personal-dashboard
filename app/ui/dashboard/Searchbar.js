"use client";
import React, { useState } from "react";
import { Google, Bing, DuckDuckGo, Search, Down } from "@/app/utils/icons";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearchEngines, setShowSearchEngines] = useState(false);
  const [selectSearchEngine, setSearchEngine] = useState("Google");

  const searchData = [Google, Bing, DuckDuckGo];

  function searchSubmit(e) {
    e.preventDefault();
    window.open(
      selectSearchEngine == "DuckDuckGo"
        ? `https://duckduckgo.com/?va=e&t=hr&q=${searchText
            .toLowerCase()
            .replaceAll(" ", "+")}`
        : `https://www.${selectSearchEngine}.com/search?q=${searchText
            .toLowerCase()
            .replaceAll(" ", "%20")}`,
      "_blank"
    );
    setSearchText("");
  }

  return (
    <div className="p-2 px-4 bg-slate-700 opacity-70 rounded-full w-fit fill-white text-white cursor-pointer flex items-center">
      <Search />
      <form onSubmit={searchSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className=" bg-transparent placeholder:text-slate-300 outline-none px-2 cursor-pointer w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 2xl:w-96"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <div className="relative">
          <div
            className="flex"
            onClick={() => setShowSearchEngines(!showSearchEngines)}
          >
            {selectSearchEngine == "Google" ? (
              <Google />
            ) : selectSearchEngine === "Bing" ? (
              <Bing />
            ) : (
              <DuckDuckGo />
            )}
            <Down
              className={
                showSearchEngines ? `md:-rotate-90 -rotate-180` : `rotate-0`
              }
            />
          </div>
          <div
            className={`absolute bottom-7 right-0 md:bottom-auto md:right-auto md:top-0  md:left-12 bg-black p-2 rounded-md ${
              showSearchEngines ? "visible" : "invisible"
            }`}
          >
            <button
              type="button"
              className="flex items-center gap-4 hover:text-red-600"
              onClick={() => setSearchEngine("Google")}
            >
              <Google /> Google
            </button>
            <button
              type="button"
              className="flex items-center gap-4 hover:text-red-600"
              onClick={() => setSearchEngine("Bing")}
            >
              <Bing /> Bing
            </button>
            <button
              type="button"
              className="flex items-center gap-4 hover:text-red-600"
              onClick={() => setSearchEngine("DuckDuckGo")}
            >
              <DuckDuckGo /> DuckDuckGo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
