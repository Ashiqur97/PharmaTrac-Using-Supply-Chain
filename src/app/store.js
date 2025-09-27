import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducers';

export const store = configureStore({
  reducer: rootReducer,
});

// Save theme to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      theme: state.theme,
    });
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // ignore write errors
  }
};

store.subscribe(() => {
  saveState(store.getState());
});