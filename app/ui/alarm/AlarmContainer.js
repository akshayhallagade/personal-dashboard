import React from "react";
const NewAlarm = () => {
  return (
    <div className="  w-1/2 p-2 flex item-center justify-center flex-col">
      <div className="text-center">
        <h1 className="text-white font-large text-3xl underline">
          SET REMINDER
        </h1>
      </div>
      <div className="mt-2 w-full h-1/2 flex gap-2 items-center justify-center">
        {/* Hours */}
        <input
          type="number"
          className="w-2/5 h-2/3 p-auto bg-transparent text-white text-9xl outline-none text-center   caret-transparent"
          min="00"
          max="24"
          size="2"
          placeholder="12"
        />
        {/* Minutes */}

        <div className="text-9xl text-white">:</div>
        <input
          type="number"
          placeholder="00"
          className="w-2/5 h-2/3 p-auto bg-transparent text-white text-9xl outline-none text-center   caret-transparent"
          min="00"
          max="60"
          size="2"
        />
      </div>
      <div className="w-full p-4 flex items justify-center gap-2">
        {/* // Reason : Reminder  */}
        <input
          type="text"
          className="px-4 py-2 w-3/5 bg-slate-400 bg-opacity-80 placeholder:text-white outline-none"
          placeholder="Remind for"
        />
        {/* // Set Ringtone */}
        <select className="w-2/5 px-4 py-2 text-white bg-slate-400 bg-opacity-80 placeholder:text-white outline-none">
          <option value="1" default="true">
            Tone 1
          </option>
          <option value="1">Tone 2</option>
          <option value="1">Tone 3</option>
        </select>
      </div>
      <div className="w-full p-4 flex items justify-center gap-2">
        <input
          type="submit"
          className="px-6 py-1 delay-100 duration-200 text-white hover:bg-green-900 bg-green-400 bg-opacity-50 placeholder:text-white outline-none"
          placeholder="Remind for"
        />
      </div>
    </div>
  );
};

const AlarmList = () => {
  // const reminders = () =>{
  //   []
  // }

  return (
    <div className="border-l-2 border-slate-300 w-1/2 flex items-center justify-center flex-col gap-4">
      <div className="text-center">
        <h1 className="text-white font-large text-3xl underline">
          All Reminders
        </h1>
      </div>
      <div className="w-fit h-5/6 overflow-scroll reminders-list">
        <table className="text-white text-center">
          <thead className="border-2">
            <tr className="border-2">
              <th className="border-2 py-4 px-5">No.</th>
              <th className="border-2 py-4 px-5">Time</th>
              <th className="border-2 py-4 px-5">Reminde for</th>
              <th className="border-2 py-4 px-5 text-red-500"> X </th>
            </tr>
          </thead>
          <tbody className="border-2">
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">1</td>
              <td className="border-2">9:20</td>
              <td className="border-2">java Class</td>
              <td className="border-2">
                <button className="hover:bg-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AlarmContainer = () => {
  return (
    <div className="w-11/12 h-full bg-slate-800 bg-opacity-70 shadow-slate-800 shadow-md p-2 flex">
      <NewAlarm></NewAlarm>
      <AlarmList></AlarmList>
    </div>
  );
};

export default AlarmContainer;
