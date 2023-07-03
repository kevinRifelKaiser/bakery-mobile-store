import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import ordersReducer from "./orders/ordersSlice";
import authReducer from "./auth/authSlice";
import userDataReducer from "./userData/userDataSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer,
    userData: userDataReducer,
  },
});
