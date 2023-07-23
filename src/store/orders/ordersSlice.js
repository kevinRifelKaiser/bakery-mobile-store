import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  selected: null,
};

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const firebaseApiUrl = process.env.API_URL;
  try {
    const response = await fetch(`${firebaseApiUrl}orders.json`, {
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
