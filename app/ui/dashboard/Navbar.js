import React from "react";
import Weather from "@/app/ui/dashboard/Weather";
import LogIn from "./LogIn";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" p-0 md:p-2 px-0 md:px-4 w-screen h-fit flex text-white">
      <ul className="w-full">
        <li className="float-left flex items-center h-full hover:text-red-300 hover:underline cursor-pointer">
          <Link className="px-2 h-100" href="./dashboard">
            Dashboard
          </Link>
        </li>
        <li className="float-left flex items-center h-full hover:text-red-300 hover:underline cursor-pointer">
          <a className="px-2 h-100">Alarm</a>
        </li>
        <li className="float-left flex items-center h-full hover:text-red-300 hover:underline cursor-pointer">
          <Link className="px-2 h-100" href="./dashboard/kanban">
            Kanban
          </Link>
        </li>
        <li className="float-right px-4 h-full flex items-center">
          <LogIn />
        </li>
        <li className="float-right px-0 md:px-4 ">
          <Weather />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
