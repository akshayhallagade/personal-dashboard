"use client";
import React, { useState } from "react";
import KanbanList from "@/app/ui/kanban/KanbanList";
import { Add } from "@/app/utils/icons";

const KanbanBoard = () => {
  const [kanbanList, setKanbanList] = useState([1]);
  // const [deleteList, setDeletelist] = useState(0);

  const addkanbanList = () => {
    const templist = [...kanbanList];
    templist.push(templist.length + 1);
    setKanbanList(templist);
  };

  // // Recived Data from Child
  // const receivedDeleteId = (data) => {
  //   const tempList = [...kanbanList];
  //   templist.filter(item !== data);
  //   setKanbanList(tempList);
  // };

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
          <Add className="fill-white" /> <p className="text-sm"> Add List</p>
        </button>
      </div>

      <div className="w-full h-full content overflow-x-scroll flex kanban-board gap-2 py-2">
        {/* Creating Lists  */}
        {kanbanList.map((item, index) => (
          <KanbanList
            key={index}
            // listID={index}
            // deleteListIdFromChild={receivedDeleteId}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
