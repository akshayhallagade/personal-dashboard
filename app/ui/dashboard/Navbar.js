"use client";
import React, { useState } from "react";
import Weather from "@/app/ui/dashboard/Weather";
import LogIn from "./LogIn";
import Link from "next/link";
import { Repeat } from "@/app/utils/icons";

const Navbar = () => {
  const [elementsCollection, setElementsCollection] = useState([<Weather />]);

  const addElement = () =>
    setElementsCollection((oldElements) => [...oldElements, <Weather />]);

  return (
    <nav className=" p-0 md:p-2 px-0 md:px-4 w-screen h-fit flex text-white hover:shadow-sm hover:shadow-cyan-800 delay-300 duration-300">
      <ul className="w-full">
        <li className="float-left flex items-center h-full hover:text-red-300 hover:underline cursor-pointer">
          <Link className="px-2 h-100" href="./dashboard/[id]" as="/dashboard">
            Dashboard
          </Link>
        </li>
        {/* <li className="float-left flex items-center h-full hover:text-red-300 hover:underline cursor-pointer">
          <Link className="px-2 h-100" href="./dashboard/alarm">
            Alarm
          </Link>
        </li> */}
        <li className="float-left flex items-center h-full hover:text-red-300 hover:underline cursor-pointer">
          <Link
            className="px-2 h-100"
            href="./dashboard/[id]"
            as="/dashboard/kanban"
          >
            Kanban Board
          </Link>
        </li>
        {/* <li className="float-right px-4 h-full flex items-center">
          <LogIn />
        </li> */}
        <li className="float-right px-0 md:px-4 flex items-center gap-1 weatherlocation">
          <Repeat
            className="fill-transparent hover:fill-gray-400 duration-150"
            size={40}
            onClick={addElement}
          />
          {elementsCollection.map((item) => {
            return item;
          })}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
