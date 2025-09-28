import React,{useEffect} from 'react';
import {setTheme} from './features/theme/themeSlice';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDashboardData} from './features/dashboard/dashboardSlice';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';


// Layout Components
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';


import Dashboard from './pages/Dashboard';


function App() {
  return (
   
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
