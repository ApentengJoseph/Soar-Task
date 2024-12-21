import React from "react";
import { useProfile } from "../pages/ProfileContext"; 

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const { profile } = useProfile(); //  profile state
  return (
    <header className="bg-white p-4 flex flex-wrap justify-between items-center shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        <button
          className="text-2xl md:hidden text-gray-800 mr-4"
          onClick={toggleSidebar}
        >
          <span className="material-icons">{isSidebarOpen ? "" : "menu"}</span>
        </button>
        <h2 className="hidden md:block text-xl font-medium text-secondary">Overview</h2>
      </div>
      <h2 className="block md:hidden text-xl font-medium text-secondary">Overview</h2>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Search Input */}
        <div className="relative hidden md:flex items-center bg-[#F4F6FC] rounded-full px-4 py-2 shadow-sm">
          <span className="material-icons text-searchBackground">search</span>
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent ml-2 text-sm text-searchBackground focus:outline-none w-full"
          />
        </div>

        {/* Icon Buttons */}
        <div className="relative hidden md:flex space-x-4">
          <div className="bg-iconBackground w-10 h-10 flex items-center justify-center rounded-full shadow-sm cursor-pointer">
            <img src="icons/settings-top.png" alt="Logo" className="w-5 h-5" />
          </div>
          <div className="bg-iconBackground w-10 h-10 flex items-center justify-center rounded-full shadow-sm cursor-pointer">
          <img src="icons/notification-top.png" alt="Logo" className="w-5 h-5" />
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex w-full mt-4 md:hidden items-center bg-[#F4F6FC] rounded-full px-4 py-2 shadow-sm">
          <span className="material-icons text-searchBackground">search</span>
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent ml-2 text-sm text-searchBackground focus:outline-none w-full"
          />
        </div>
    </header>
  );
};

export default Header;
