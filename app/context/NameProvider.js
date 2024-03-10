"use client";
import React, { createContext, useState } from "react";

// Creating search Context
const AdminNameContext = createContext();

// Wrapping the App with the global State -> AdminName
const NameProvider = ({ children }) => {
  const [adminName, setAdminName] = useState("");
  return (
    <AdminNameContext.Provider value={{ adminName, setAdminName }}>
      {children}
    </AdminNameContext.Provider>
  );
};

export { AdminNameContext };
export default NameProvider;
