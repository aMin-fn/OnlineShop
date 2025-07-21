import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`flex h-screen`}>
      <div
        className={`bg-gray-800 text-white duration-300 ease-in-out ${
          isOpen ? 'w-64' : 'w-16'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <span className={`text-lg font-bold ${!isOpen && 'hidden'}`}>My App</span>
          <FaBars onClick={toggleSidebar} className="cursor-pointer" />
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 space-y-2">
          <SidebarItem icon={<FaHome />} label="Home" isOpen={isOpen} />
          <SidebarItem icon={<FaUser />} label="Profile" isOpen={isOpen} />
          <SidebarItem icon={<FaCog />} label="Settings" isOpen={isOpen} />
        </nav>
      </div>

      {/* Page content */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl">Welcome to the Dashboard</h1>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, isOpen }) => (
  <div className="flex items-center p-2 rounded hover:bg-gray-700 cursor-pointer">
    <span className="text-xl">{icon}</span>
    {isOpen && <span className="ml-3">{label}</span>}
  </div>
);

export default Sidebar;
