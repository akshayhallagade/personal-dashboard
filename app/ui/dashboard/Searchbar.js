import React from "react";

const Searchbar = () => {
  return (
    <div className="px-4 py-2 bg-slate-700 opacity-70 rounded-full w-fit flex fill-white text-white cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4"
        viewBox="0 0 512 512"
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <input
        className="bg-transparent w-48 lg:w-60 xl:w-72 2xl:w-80 placeholder:text-slate-300 outline-none px-2 cursor-pointer"
        placeholder="Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5"
        viewBox="0 0 448 512"
      >
        <path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c77.4 0 142-55 156.8-128H256c-17.7 0-32-14.3-32-32s14.3-32 32-32H400c25.8 0 49.6 21.4 47.2 50.6C437.8 389.6 341.4 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57c13.2 11.8 14.3 32 2.5 45.2s-32 14.3-45.2 2.5C302.3 111.4 265 96 224 96z" />
      </svg>
    </div>
  );
};

export default Searchbar;
