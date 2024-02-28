import AlarmContainer from "@/app/ui/alarm/AlarmContainer";
import Navbar from "@/app/ui/dashboard/Navbar";
import React from "react";

const page = () => {
  return (
    <section className="w-screen h-screen">
      <Navbar />
      <div className="flex justify-center items-center flex-col h-5/6 px-8 mt-4 p-4">
        <AlarmContainer />
      </div>
    </section>
  );
};

export default page;
