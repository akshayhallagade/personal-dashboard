"use client";
import React, { useState } from "react";

const KanbanList = () => {
  //updating the value every keypress
  const [val, setVal] = useState("");

  //Tasklist
  const [toDo, setTodo] = useState([]);

  const [listName, setListName] = useState("🖊  List Name !");

  const [showMenu, setShowMenu] = useState(false);

  // hide unhide button
  // const [show, setShow] = useState(false);

  //Adding new Value
  const setNewToDo = (e) => {
    e.preventDefault();
    setTodo([...toDo, { item: val, status: false }]);
    setVal("");
  };

  //Delete particular item
  const deleteItem = (e) => {
    const indexElement = Number(e.target.parentElement.dataset.id);
    const tempTodoList = [...toDo]; // creating another copy of the todo with different reference
    tempTodoList.splice(indexElement, 1);
    setTodo(tempTodoList);
  };

  // Delete Whole List
  const deleteAll = () => {
    setTodo([]);
    setShowMenu(false);
  };

  // Delete Whole List
  const deleteCompletedTask = () => {
    const templist = [...toDo];
    const finallist = templist.filter((item) => !item.status);
    setTodo(finallist);
    setShowMenu(false);
  };

  //updating Elemnet Status
  const updateStatus = (e) => {
    // 1. Copy the element to another tempList
    const tempTodoList = [...toDo];
    // 2. Gonna use top update element-> splice to remove the element. splice(index, no.of Elements, updatedElement)
    // 3. get index
    const indexElement = e.target.parentElement.dataset.id;
    // 4.get Status and update it
    tempTodoList[indexElement].status = !tempTodoList[indexElement].status;
    // 5. updateElement
    setTodo(tempTodoList);
    console.log(tempTodoList);
    // 6. pass the finla list to the setTodo to render.
  };

  return (
    <div className="min-w-48 p-4 pb-6 bg-slate-700 bg-opacity-60 rounded-md">
      <div className="flex">
        <input
          type="text"
          className="text-white w-fit font-medium text-sm bg-transparent outline-none"
          onClick={(e) => (e.target.value = listName)}
          placeholder="List Name"
          onChange={(e) => setListName(e.target.value)}
          value={listName}
        />
        {/* //................................... */}
        {/* //Menu  */}
        <div className="relative">
          {/* //Button for menu */}
          <button
            className="px-2"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
              className={`w-1 fill-white`}
            >
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>
          </button>
          {/* // Menu Option for Kanban Board */}
          <div className={`${showMenu ? "absolute" : "hidden"} right-3 top-0`}>
            <div
              className={`w-40 flex items-start text-xs justify-center flex-col text-slate-300 bg-gray-800 rounded shadow-sm shadow-slate-400`}
            >
              <button
                className="w-full py-2 px-2 hover:bg-red-500 hover:text-white "
                onClick={deleteCompletedTask}
              >
                Delete Completed Task
              </button>
              <button
                className="w-full py-2 px-2 hover:bg-red-500 hover:text-white"
                onClick={deleteAll}
              >
                Delete All Task
              </button>
            </div>
          </div>
        </div>
        {/* //................................... */}
      </div>
      <hr />
      <div className="py-2 h-full w-full overflow-y-scroll kanban-list-scroll">
        <form onSubmit={setNewToDo}>
          <input
            type="text"
            className="w-full bg-slate-500 bg-opacity-50 text-xs px-2 py-1 placeholder:text-slate-300 outline-none caret-white text-white font-lg"
            placeholder="e.g. Do Homework"
            onChange={(e) => setVal(e.target.value)}
            value={val}
          />
        </form>

        {/* // Todo list  */}
        {toDo.map((item, index) => (
          <div
            className="w-11/12 h-auto ml-1 py-2 text-slate-300 text-xs flex"
            data-id={index}
            key={index}
          >
            <input
              type="checkbox"
              checked={item.status}
              onChange={updateStatus}
            />
            <p className="bg-transparent h-fit w-full ml-2">{item.item}</p>
            <button onClick={deleteItem} className="cursor-pointer">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanList;
