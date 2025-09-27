import React,{useEffect} from 'react';
import {setTheme} from './features/theme/themeSlice';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDashboardData} from './features/dashboard/dashboardSlice';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';



import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <div className='flex h-screen w-screen overflow-hidden bg-gray-50 dark:bg-dark-900'>
        <div className='flex-1 flex flex-col overflow-hidden'>
          <main className='flex-1 overflow-auto'>
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
