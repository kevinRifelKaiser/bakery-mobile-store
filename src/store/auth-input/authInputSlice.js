import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "",
    password: "",
  },
  isValid: false,
};

export const authInputSlice = createSlice({
  name: "authInput",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      if (action.payload.id === "email") {
        state.value.email = action.payload.value.email;
        state.isValid = action.payload.isValid;
      }
      if (action.payload.id === "password")
        state.value.password = action.payload.value.password;
      state.isValid = action.payload.isValid;
    },
    inputOnBlur: (state) => {
      return state;
    },
  },
});

export const { setInputValue, inputOnBlur } = authInputSlice.actions;

export default authInputSlice.reducer;
