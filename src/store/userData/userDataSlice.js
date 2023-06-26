import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  picture: null,
  addresss: null,
  lat: null,
  lng: null,
  cardNumber: "",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserImage: (state, action) => {
      const userImg = action.payload;
      state.picture = userImg;
    },
  },
});

export const { addUserImage } = userDataSlice.actions;

export default userDataSlice.reducer;
