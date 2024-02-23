import React from "react";
import Weather from "@/app/ui/dashboard/Weather";

const Navbar = () => {
  return (
    <nav className="p-2 w-screen h-fit flex text-white">
      <ul className="w-full ">
        <li className="float-left flex items-center h-full hover:text-red-300 hover:underline cursor-pointer">
          <a className="px-2 h-100">Set a Alarm</a>
        </li>
        <li className="float-right px-4 cursor-pointer">
          <Weather />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
