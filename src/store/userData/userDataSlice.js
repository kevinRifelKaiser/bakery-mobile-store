import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";

const initialState = {
  name: "",
  picture: null,
  lat: null,
  lng: null,
  cardNumber: "",
};

export const addProfilePicture = createAsyncThunk(
  "userData/addProfilePicture",
  async (image) => {
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      return Path;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addShippingAddress: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProfilePicture.fulfilled, (state, action) => {
      state.picture = action.payload;
    });
  },
});

export const { addShippingAddress } = userDataSlice.actions;

export default userDataSlice.reducer;
