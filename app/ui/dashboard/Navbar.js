import React from "react";
import Weather from "@/app/ui/dashboard/Weather";
import LogIn from "./LogIn";

const Navbar = () => {
  return (
    <nav className=" p-0 md:p-2 px-0 md:px-4 w-screen h-fit flex text-white">
      <ul className="w-full">
        <li className="float-left flex items-center h-full hover:text-red-300 hover:underline cursor-pointer">
          <a className="px-2 h-100">Alarm</a>
        </li>
        <li className="float-left flex items-center h-full hover:text-red-300 hover:underline cursor-pointer">
          <a className="px-2 h-100">Kanban</a>
        </li>
        <li className="float-right px-4 h-full flex items-center cursor-pointer">
          <LogIn />
        </li>
        <li className="float-right px-0 md:px-4  cursor-pointer ">
          <Weather />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
