import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice";
import authInputReducer from "./auth-input/authInputSlice";
import authFormReducer from "./auth-form/authFormSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    authInput: authInputReducer,
    authForm: authFormReducer,
  },
});
