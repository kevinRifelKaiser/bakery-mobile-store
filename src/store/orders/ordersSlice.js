import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../constants/firebase";

const initialState = {
  orders: [],
  selected: null,
};

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  try {
    const response = await fetch(`${API_URL}orders.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);

    const orders = Object.keys(result).map((key) => ({
      ...result[key],
      id: key,
    }));
    console.log(orders);

    return orders;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export default ordersSlice.reducer;
