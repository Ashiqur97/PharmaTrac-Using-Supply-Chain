import React from 'react';
import { useSelector } from 'react-redux';
import StatsGrid from '../components/Dashboard/StatsGrid';
import SupplyChainFlow from '../components/Dashboard/SupplyChainFlow';
import RecentActivities from '../components/Dashboard/RecentActivities';
import DrugTraceabilityTable from '../components/Dashboard/DrugTraceabilityTable';

const Dashboard = () => {
  const { stats, activities, alerts, drugs, status } = useSelector((state) => state.dashboard);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <StatsGrid stats={stats} />
      <SupplyChainFlow />
      <RecentActivities activities={activities} alerts={alerts} />
      <DrugTraceabilityTable drugs={drugs} />
    </div>
  );
};

export default Dashboard;