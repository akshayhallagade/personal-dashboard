import React from "react";

const KanbanList = () => {
  const sampletodos = [
    "Wash my",
    "item 2",
    "item 1",
    "item 2",
    "item 1",
    "item 2",
    "item 1",
    "item 2",
    "item 1",
    "item 2",
    "item 1",
    "item 2",
    "item 1",
    "item 2",
    "item 1",
    "item 2",
    "item 1",
    "item 2",
    "item 1",
    "item 2",
  ];
  return (
    <div className="min-w-44 p-4 overflow-y-scroll bg-slate-700 bg-opacity-60 rounded-md">
      <h1 className="text-white w-fit font-medium text-sm ">Todays List</h1>
      <hr />
      <div className="py-2">
        <button className="text-slate-200 text-xs text-left w-full">
          <a className="text-blue-600 text-lg font-extrabold">+</a> Add a task
        </button>
        {sampletodos.map((todo, index) => (
          <div
            className="w-full h-auto ml-1 py-2 text-slate-300 text-xs flex"
            key={index}
          >
            <input type="checkbox" />
            <p className="bg-transparent h-fit w-full ml-2">{todo}</p>
          </div>
        ))}
        {/* <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div>
      <div className="w-fit h-auto ml-3 text-slate-300">item1</div> */}
      </div>
    </div>
  );
};

export default KanbanList;
