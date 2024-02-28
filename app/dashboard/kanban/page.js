import React from "react";
import Navbar from "@/app/ui/dashboard/Navbar";
import KanbanBoard from "@/app/ui/kanban/KanbanBoard";

const page = () => {
  return (
    <section className="w-screen h-screen">
      <Navbar />
      <KanbanBoard />
    </section>
  );
};

export default page;
