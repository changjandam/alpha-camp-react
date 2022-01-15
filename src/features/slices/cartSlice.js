import { current, createSlice } from '@reduxjs/toolkit';
import structuredClone from '@ungap/structured-clone';

const initialState = {
  items: [
    { id: 1, amount: 1 },
    { id: 2, amount: 1 },
  ],
  total: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      let items = structuredClone(current(state).items);
      let item = items.find((i) => i.id === payload.id);
      item.amount += 1;
      state.items = items;
    },
    subtractItem: (state, { payload }) => {
      let items = structuredClone(current(state).items);
      let item = items.find((i) => i.id === payload.id);
      item.amount -= 1;
      state.items = items.filter((i) => i.amount > 0);
    },
    setTotal:(state,{payload}) => {
      state.total = payload.total;
    }
  },
});

export const { addItem, subtractItem, setTotal } = cartSlice.actions;

export default cartSlice.reducer;
