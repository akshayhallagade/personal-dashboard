"use client";
import React, { useState } from "react";
import KanbanList from "@/app/ui/kanban/KanbanList";

const KanbanBoard = () => {
  const [kanbanList, setKanbanList] = useState([1]);

  const addkanbanList = () => {
    const templist = [...kanbanList];
    templist.push(templist.length + 1);
    setKanbanList(templist);
  };

  return (
    <div className="flex justify-center flex-col h-5/6 px-8 mt-4">
      <div className="flex gap-5">
        <h1 className="text-xl w-fit text-white text-bold px-1 hover:text-red-600 duration-200 delay-50">
          KANBAN BOARD
        </h1>
        <button
          className="w-fit text-lg px-2 text-white border-2 hover:bg-slate-500 border-slate-600 rounded duration-200 delay-50 flex gap-2 items-center"
          onClick={addkanbanList}
        >
          + <p className="text-sm"> Add List</p>
        </button>
      </div>

      <div className="w-full h-full content overflow-x-scroll flex kanban-board gap-2 py-2">
        {kanbanList.map((item, index) => (
          <KanbanList key={index} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
