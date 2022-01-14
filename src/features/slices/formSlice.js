import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    gender: 'female',
    name: '',
    phone: '',
    email: '',
    county: '',
    address: '',
    transport: 0,
    cardName: '',
    cardNumber: '',
    expire: '',
    cvc: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      console.log('work')
      state.value = action.payload;
    },
  },
});

export const { changeValue } = formSlice.actions;

export default formSlice.reducer;
