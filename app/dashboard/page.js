import React from "react";
import Navbar from "@/app/ui/dashboard/Navbar";
import Clock from "@/app/ui/dashboard/Clock";
import Searchbar from "@/app/ui/dashboard/Searchbar";
import Thought from "@/app/ui/dashboard/Thought";

const Dashboard = () => {
  return (
    <section className="page-1 h-full">
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center flex-col ">
        <Clock />
      </div>
      <div className="flex items-center justify-center flex-col">
        <Searchbar />
      </div>
      <div className="flex justify-center w-full">
        <Thought />
      </div>
    </section>
  );
};

export default Dashboard;
