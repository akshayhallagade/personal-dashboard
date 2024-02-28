"use client";
import React, { useEffect, useState } from "react";

const Thought = () => {
  const [thought, setThought] = useState("");

  //Fetching the Data
  useEffect(() => {
    //APIs that can use :
    //1->  "https://type.fit/api/quotes"

    async function fetchData() {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setThought(data[Math.round(Math.random() * data.length)]);
        return data;
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-4/5 lg:w-2/3 xl:3/6 text-slate-200 text-center text-xs lg:text-base italic py-4 delay-75 duration-200 fill-transparent hover:fill-white">
      {thought.text || "Loading"}~ '{thought.author}'
    </div>
  );
};

export default Thought;
