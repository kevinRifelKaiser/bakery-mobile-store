import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";
import { insertUserData, fetchUserData } from "../../database";

const initialState = {
  picture: null,
  name: "",
  lat: null,
  lng: null,
  cardNumber: "",
};

export const addProfileData = createAsyncThunk(
  "userData/addProfileData",
  async ({ image, name, lat, lng, cardNumber }) => {
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      const result = await insertUserData(Path, name, lat, lng, cardNumber);
      console.log(result);
      return {
        picture: Path,
        name,
        lat,
        lng,
        cardNumber,
      };
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const getProfileData = createAsyncThunk(
  "userData/getProfileData",
  async () => {
    try {
      const result = await fetchUserData();
      const lastItem = result.rows._array.pop();
      return lastItem;
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
    builder
      .addCase(addProfileData.fulfilled, (state, action) => {
        state.picture = action.payload.picture;
        state.name = action.payload.name;
        state.lat = action.payload.lat;
        state.lng = action.payload.lng;
        state.cardNumber = action.payload.cardNumber;
      })
      .addCase(getProfileData.fulfilled, (state, action) => {
        state.picture = action.payload.picture;
        state.name = action.payload.name;
        state.lat = action.payload.lat;
        state.lng = action.payload.lng;
        state.cardNumber = action.payload.cardNumber;
      });
  },
});

export default userDataSlice.reducer;
