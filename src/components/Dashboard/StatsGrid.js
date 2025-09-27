import React from 'react';
import { FaCapsules, FaShieldAlt, FaLink, FaExclamationTriangle } from 'react-icons/fa';

const StatsGrid = ({ stats }) => {
  const statCards = [
    {
      title: 'Verified Drugs',
      value: stats.verifiedDrugs.toLocaleString(),
      change: '+12.4%',
      icon: FaCapsules,
      color: 'blue',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Compliance Rate',
      value: `${stats.complianceRate}%`,
      change: 'Excellent',
      icon: FaShieldAlt,
      color: 'green',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Blockchain Records',
      value: stats.blockchainRecords.toLocaleString(),
      change: '+18.5%',
      icon: FaLink,
      color: 'purple',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Emergency Alerts',
      value: stats.emergencyAlerts,
      change: 'Requires attention',
      icon: FaExclamationTriangle,
      color: 'red',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      textColor: 'text-red-600 dark:text-red-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
              <p className="text-3xl font-bold mt-1 text-gray-800 dark:text-white">{stat.value}</p>
              <p className={`text-sm mt-1 ${stat.textColor}`}>
                <span className="inline-flex items-center">
                  <span className="mr-1">↑</span> {stat.change}
                </span>
              </p>
            </div>
            <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`text-xl ${stat.textColor}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;