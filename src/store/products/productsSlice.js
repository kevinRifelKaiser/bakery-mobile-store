import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../constants/data/products";

const initialState = {
  products: PRODUCTS,
  selected: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );

      if (productIndex > -1) {
        state.selected = productIndex + 1;
      }
    },
  },
});

export const { selectProduct } = productsSlice.actions;

export default productsSlice.reducer;
