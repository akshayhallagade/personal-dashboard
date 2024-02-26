import React from "react";
import Music from "../ui/dashboard/Music";

const layout = ({ children }) => {
  return (
    <div>
      <main className="w-screen h-screen">{children}</main>
      <Music />
    </div>
  );
};

export default layout;
