import React from "react";
import Navbar from "@/app/ui/dashboard/Navbar";
import KanbanList from "@/app/ui/kanban/KanbanList";

const page = () => {
  return (
    <section className="w-screen h-screen">
      <Navbar />
      <div className="flex justify-center flex-col h-5/6 px-8 mt-4">
        <h1 className="text-xl text-white text-bold px-1 hover:text-red-600">
          KANBAN BOARD
        </h1>
        <div className="w-full h-full content overflow-x-scroll flex kanban-board gap-2 py-2">
          <KanbanList />
          <KanbanList />
          <KanbanList />
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
