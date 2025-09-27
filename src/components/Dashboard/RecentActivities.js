import React from 'react';

const RecentActivities = ({ activities, alerts }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Activities */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Activities</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
        </div>
        
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <i className="fas fa-capsules text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{activity.type}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800 dark:text-white">{activity.batch}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Alerts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Alerts</h3>
          <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 text-xs font-medium rounded-full">
            {alerts.length} Active
          </span>
        </div>
        
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-4 rounded-lg transition-all duration-200 hover:translate-x-1 ${
                alert.severity === 'High' 
                  ? 'bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500' 
                  : 'bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className={`font-medium ${
                    alert.severity === 'High' 
                      ? 'text-red-800 dark:text-red-400' 
                      : 'text-yellow-800 dark:text-yellow-400'
                  }`}>
                    {alert.type}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{alert.description}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  alert.severity === 'High' 
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400' 
                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                }`}>
                  {alert.severity}
                </span>
              </div>
              <div className="mt-3 flex items-center space-x-4">
                <button className={`text-sm font-medium ${
                  alert.severity === 'High' 
                    ? 'text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300' 
                    : 'text-yellow-700 dark:text-yellow-400 hover:text-yellow-900 dark:hover:text-yellow-300'
                }`}>
                  Details
                </button>
                <button className={`text-sm font-medium ${
                  alert.severity === 'High' 
                    ? 'text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300' 
                    : 'text-yellow-700 dark:text-yellow-400 hover:text-yellow-900 dark:hover:text-yellow-300'
                }`}>
                  Action
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;