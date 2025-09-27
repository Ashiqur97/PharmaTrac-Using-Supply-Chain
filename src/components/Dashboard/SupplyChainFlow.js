import React from 'react';

const SupplyChainFlow = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Supply Chain Flow</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Live View</button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">Historical</button>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
            <i className="fas fa-industry text-2xl"></i>
          </div>
          <p className="font-medium text-gray-800 dark:text-white">Manufacturer</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">324 Active</p>
        </div>
        
        <div className="flex-1 mx-4">
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 relative">
            <div className="absolute top-0 left-0 w-full h-4 flex justify-between">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
            <i className="fas fa-truck text-2xl"></i>
          </div>
          <p className="font-medium text-gray-800 dark:text-white">
            <span className="status-light status-active"></span>
            Distributor
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">512 Active</p>
        </div>
        
        <div className="flex-1 mx-4">
          <div className="h-1 bg-gradient-to-r from-purple-500 to-green-500 relative">
            <div className="absolute top-0 left-0 w-full h-4 flex justify-between">
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
            <i className="fas fa-store text-2xl"></i>
          </div>
          <p className="font-medium text-gray-800 dark:text-white">Pharmacy</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">412 Active</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-800 dark:text-blue-400">Avg. Transit Time</span>
            <i className="fas fa-clock text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">2.4 days</p>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">From manufacturer to pharmacy</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-purple-800 dark:text-purple-400">Cold Chain Compliance</span>
            <i className="fas fa-thermometer-half text-purple-500"></i>
          </div>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-400">99.2%</p>
          <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Temperature maintained</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-800 dark:text-green-400">Authenticity Rate</span>
            <i className="fas fa-check-circle text-green-500"></i>
          </div>
          <p className="text-2xl font-bold text-green-700 dark:text-green-400">99.98%</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">Verified products</p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainFlow;