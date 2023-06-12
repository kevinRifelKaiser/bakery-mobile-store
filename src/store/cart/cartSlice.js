import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants/firebase";

const initialState = {
  items: [],
  confirm: false,
};

export const confirmCart = createAsyncThunk(
  "cart/confirmCart",
  async (items, totalAmount) => {
    const total = totalAmount;
    try {
      const response = await fetch(`${API_URL}orders.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items: { ...items },
          total,
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
  },
  extraReducers: (builder) => {
    builder.addCase(confirmCart.fulfilled, (state, action) => {
      state.confirm = action.payload;
    });
  },
});

export const { addToCart, updateCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
