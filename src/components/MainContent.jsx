import React from "react";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    // bg-white md:
    <main className="p-4 flex-1 overflow-x-hidden  bg-iconBackground">
      <Outlet />
    </main>
  );
};

export default MainContent;
