import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    gender: 'male',
    name: '',
    phone: '',
    email: '',
    county: '臺北市',
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
      state.value = action.payload;
    },
  },
});

export const { changeValue } = formSlice.actions;

export default formSlice.reducer;
