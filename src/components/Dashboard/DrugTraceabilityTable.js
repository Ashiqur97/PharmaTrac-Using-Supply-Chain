import React from 'react';

const DrugTraceabilityTable = ({ drugs }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'In Transit':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">In Transit</span>;
      case 'Delivered':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">Delivered</span>;
      case 'Recalled':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Recalled</span>;
      default:
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">{status}</span>;
    }
  };

  const getDrugIcon = (name) => {
    if (name.includes('Amoxicillin') || name.includes('Capsule')) {
      return 'fa-pills';
    } else if (name.includes('Lisinopril') || name.includes('Tablet')) {
      return 'fa-tablets';
    } else if (name.includes('Insulin') || name.includes('Syringe')) {
      return 'fa-syringe';
    }
    return 'fa-capsules';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Drug Traceability</h3>
        <div className="flex space-x-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by batch or name..." 
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
            <i className="fas fa-qrcode"></i>
            <span>Scan QR</span>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Drug</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Batch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Manufacturer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Expiry</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {drugs.map((drug) => (
              <tr key={drug.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                      <i className={`fas ${getDrugIcon(drug.name)} text-blue-600 dark:text-blue-400`}></i>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800 dark:text-white">{drug.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{drug.dosage}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{drug.batch}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{drug.manufacturer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{drug.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(drug.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{drug.expiry}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">Track</button>
                  <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-medium text-gray-800 dark:text-white">1</span> to <span className="font-medium text-gray-800 dark:text-white">3</span> of <span className="font-medium text-gray-800 dark:text-white">24,563</span> results
        </p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition">Previous</button>
          <button className="px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">1</button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition">2</button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition">3</button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition">Next</button>
        </div>
      </div>
    </div>
  );
};

export default DrugTraceabilityTable;