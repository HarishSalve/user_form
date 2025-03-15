import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './formDataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;