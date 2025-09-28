// src/components/Layout/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBox, FaShieldAlt, FaDollarSign, FaExclamationTriangle, FaChartLine, FaCog, FaPills } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { path: '/dashboard', icon: FaHome, label: 'Dashboard' },
    { path: '/drug-traceability', icon: FaBox, label: 'Drug Traceability' },
    { path: '/compliance', icon: FaShieldAlt, label: 'Compliance' },
    { path: '/pricing', icon: FaDollarSign, label: 'Pricing' },
    { path: '/emergency-response', icon: FaExclamationTriangle, label: 'Emergency Response' },
    { path: '/analytics', icon: FaChartLine, label: 'Analytics' },
    { path: '/settings', icon: FaCog, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-gray-800 dark:bg-gray-900 text-white flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            {/* Changed from FaCapsules to FaPills */}
            <FaPills className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold">PharmaTrac</h1>
            <p className="text-xs text-blue-300">Supply Chain Guardian</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `sidebar-item flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${
                isActive ? 'active text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <item.icon className="w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <img   src="https://randomuser.me/api/portraits/men/32.jpg"  alt="User" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-medium">Ashiqur Rahman</p>
            <p className="text-xs text-gray-400">Pharmacist Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;