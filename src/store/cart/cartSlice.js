import { createSlice } from "@reduxjs/toolkit";
import { sumTotal } from "../../utils";

const initialState = {
  items: [],
  amount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemFound = state.items.find(
        (item) => item.id === action.payload.productData.id
      );
      if (itemFound) {
        itemFound.quantity += action.payload.itemCount;
      } else {
        const item = {
          ...action.payload.productData,
          quantity: action.payload.itemCount,
        };
        const updatedCart = [...state.items, item];
        return {
          ...state,
          items: updatedCart,
          total: sumTotal(updatedCart),
        };
      }
    },
    updateCart: (state, action) => {
      const { amount, itemId } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);
      itemToUpdate.quantity += amount;
    },
    deleteItem: (state, action) => {
      let updatedCart = [];
      updatedCart = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: updatedCart,
        total: sumTotal(updatedCart),
      };
    },
  },
});

export const { addToCart, updateCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
