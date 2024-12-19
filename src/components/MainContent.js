import React from "react";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <main className="p-4 flex-1 bg-iconBackground">
      <Outlet />
    </main>
  );
};

export default MainContent;
