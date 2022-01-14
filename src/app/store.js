import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/slices/formSlice';
export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
