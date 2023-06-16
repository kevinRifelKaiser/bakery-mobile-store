import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_AUTH_SIGNUP } from "../../constants/firebase";

const initialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
};

export const signUp = createAsyncThunk("auth/signUp", async (userData) => {
  const { email, password } = userData;
  console.log(email, password);

  try {
    const response = await fetch(URL_AUTH_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();
    console.log(data);

    return {
      token: data.idToken,
      userId: data.localId,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
