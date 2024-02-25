import React from "react";
import Music from "../ui/dashboard/Music";

const layout = ({ children }) => {
  return (
    <div>
      {children}
      <Music />
    </div>
  );
};

export default layout;
