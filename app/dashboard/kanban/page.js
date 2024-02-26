import React from "react";
import Navbar from "@/app/ui/dashboard/Navbar";
import KanbanList from "@/app/ui/kanban/KanbanList";

const page = () => {
  return (
    <section className="w-screen h-screen px-6">
      <Navbar />
      <div className="flex justify-center flex-col h-5/6 px-1">
        <h1 className="text-xl text-white text-bold underline px-1">
          Kanban Board
        </h1>
        <div className="w-full h-full content overflow-x-scroll flex kanban-board gap-2">
          <KanbanList />
          <KanbanList />
          <KanbanList />
          <KanbanList />
          <KanbanList />
          <KanbanList />
        </div>
      </div>
    </section>
  );
};

export default page;
