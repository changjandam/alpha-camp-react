import { current, createSlice } from '@reduxjs/toolkit';
import structuredClone from '@ungap/structured-clone';

const initialState = {
  items: [
    { id: 1, amount: 1 },
    { id: 2, amount: 1 },
  ],
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
  },
});

export const { addItem, subtractItem } = cartSlice.actions;

export default cartSlice.reducer;
