import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/theme/themeSlice';
import { FaSearch, FaBell, FaSignOutAlt, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">PharmaTrac</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back! Here's what's happening today.</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            {mode === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          
          <button className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <FaBell className="text-xl" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;