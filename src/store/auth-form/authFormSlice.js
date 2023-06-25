import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValues: {
    email: "",
    password: "",
  },
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: true,
};

export const authFormSlice = createSlice({
  name: "authForm",
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      const { id, value } = action.payload;
      state.inputValues[id] = value;
      state.inputValidities[id] = valid;
      // state.formIsValid =
      //   action.payload.inputValidities.email &&
      //   action.payload.inputValidities.password;
    },
  },
});

export const { setInputValue } = authFormSlice.actions;

export default authFormSlice.reducer;
