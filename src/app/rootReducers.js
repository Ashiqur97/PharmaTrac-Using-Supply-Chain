import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;