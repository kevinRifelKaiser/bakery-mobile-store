import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sumTotal } from "../../utils";

const initialState = {
  items: [],
  confirm: false,
};

export const confirmCart = createAsyncThunk(
  "cart/confirmCart",
  async (items) => {
    const total = sumTotal(items);
    const firebaseApiUrl = process.env.API_URL;
    try {
      const response = await fetch(`${firebaseApiUrl}orders.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items: { ...items },
          total: total,
        }),
      });
      const result = await response.json();
      console.log(result);
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

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
      };
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(confirmCart.fulfilled, (state, action) => {
      state.confirm = action.payload;
    });
  },
});

export const { addToCart, updateCart, deleteItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
