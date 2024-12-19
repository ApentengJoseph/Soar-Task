import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, toggleSidebar]);

  const navItems = [
    { name: "Dashboard", path: "/", icon: "home" },
    { name: "Transactions", path: "", icon: "attach_money" },
    { name: "Accounts", path: "", icon: "person" },
    { name: "Investments", path: "", icon: "bar_chart" },
    { name: "Credit Cards", path: "", icon: "credit_card" },
    { name: "Loans", path: "", icon: "monetization_on" },
    { name: "Services", path: "", icon: "build" },
    { name: "My Privileges", path: "", icon: "star" },
    { name: "Setting", path: "/settings", icon: "settings" },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 bg-white text-black w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-40 shadow-lg`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl md:hidden"
          onClick={toggleSidebar}
        >
          <span className="material-icons">close</span>
        </button>

        <h1 className="text-xl p-6 font-bold mb-8 flex items-center space-x-2">
          <span className="material-icons text-darkText">task</span>
          <span>Soar Task</span>
        </h1>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.name}
                className={`flex items-center space-x-3 px-4 py-2 rounded ${
                  isActive
                    ? "text-darkText border-l-4 border-darkText"
                    : "text-gray-500 hover:text-darkText"
                }`}
              >
                <span
                  className={`material-icons ${
                    isActive ? "text-darkText-important" : "text-gray-400"
                  }`}
                >
                  {item.icon}
                </span>
                <Link to={item.path} className="flex-1">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
