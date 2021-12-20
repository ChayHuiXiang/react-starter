import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const foundItemIndex = state.items.findIndex((item) => item.id === newItem.id);
      if (foundItemIndex !== -1) {
        state.items[foundItemIndex].quantity++;
        state.items[foundItemIndex].totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.title,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const foundItemIndex = state.items.findIndex((item) => item.id === id);
      if (state.items[foundItemIndex].quantity === 1) {
        state.items.splice(foundItemIndex, 1);
      } else {
        state.items[foundItemIndex].quantity--;
        state.items[foundItemIndex].totalPrice -= state.items[foundItemIndex].price;
      }
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
