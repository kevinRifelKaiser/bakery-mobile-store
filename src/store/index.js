import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import ordersReducer from "./orders/ordersSlice";
import favoritesReducer from "./favorites/favoritesSlice";
import authReducer from "./auth/authSlice";
import userDataReducer from "./userData/userDataSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    favorites: favoritesReducer,
    auth: authReducer,
    userData: userDataReducer,
  },
});
