import React from "react";

const Thought = () => {
  return (
    <div className="w-4/5 lg:w-2/3 xl:3/6 text-slate-200 text-center text-xs lg:text-base italic hover:pb-0 md:hover:pb-5 delay-75 duration-200 fill-transparent hover:fill-white">
      "When something is important enough, you do it even if the odds are not in
      your favor."
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4"
          viewBox="0 0 384 512"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </div>
    </div>
  );
};

export default Thought;
