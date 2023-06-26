import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";

const initialState = {
  name: "",
  picture: null,
  addresss: null,
  lat: null,
  lng: null,
  cardNumber: "",
};

export const addProfilePicture = createAsyncThunk(
  "userDate/addProfilePicture",
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProfilePicture.fulfilled, (state, action) => {
      state.picture = action.payload;
    });
  },
});

export default userDataSlice.reducer;
