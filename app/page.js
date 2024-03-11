"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import { AdminNameContext } from "./context/NameProvider";
import { Tap } from "./utils/icons";

export default function Home() {
  const [name, setName] = useState("");

  const nameContext = useContext(AdminNameContext);
  const { setAdminName } = nameContext;

  const submitName = (e) => {
    e.preventDefault();
    console.log(name);
    setAdminName(name);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="flex flex-col gap-2" onSubmit={submitName}>
        <input
          className="bg-transparent border-b-2 outline-none caret-white text-xl font-lg text-white placeholder:text-gray-400 placeholder:text-base "
          type="text"
          placeholder="Name Please ......"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="Submit">
          <Link
            className="p-2 px-8 font-semibold flex items-center gap-2 bg-teal-800 text-white hover:bg-teal-500 shadow-md shadow-slate-700 rounded-sm z-10"
            href={"./dashboard"}
          >
            Welcome To Dashboard
            <Tap />
          </Link>
        </button>
      </form>
    </div>
  );
}
