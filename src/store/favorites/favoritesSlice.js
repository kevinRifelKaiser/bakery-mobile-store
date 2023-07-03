import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants/firebase";

const initialState = {
  items: [],
};

export const addToFavorites = createAsyncThunk(
  "favorites/addToFavorites",
  async (item) => {
    try {
      const response = await fetch(`${API_URL}favorites.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: { ...item },
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  "favorites/removeFromFavorites",
  async (itemId) => {
    try {
      const response = await fetch(`${API_URL}favorites/${itemId}.json`, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async () => {
    try {
      const response = await fetch(`${API_URL}favorites.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log(result);

      const favorites = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      console.log(favorites);

      return favorites;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default favoritesSlice.reducer;
