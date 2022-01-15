import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/slices/formSlice';
import cartReducer from '../features/slices/cartSlice';
export const store = configureStore({
  reducer: {
    form: formReducer,
    cart: cartReducer,
  },
});
