import React from "react";
import Navbar from "@/app/ui/dashboard/Navbar";
import Clock from "@/app/ui/dashboard/Clock";
import Searchbar from "@/app/ui/dashboard/Searchbar";
import Thought from "@/app/ui/dashboard/Thought";

const Dashboard = () => {
  return (
    <main className="w-screen h-screen">
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
        <div className="flex items-center justify-center flex-col hover:pb-5 delay-75 duration-200 fill-transparent hover:fill-white w-full">
          <Thought />
          <div className="flex justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 384 512"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
        </div>
      </section>
      {/* <section className="page-2 h-full">adfasdasd</section> */}
    </main>
  );
};

export default Dashboard;
