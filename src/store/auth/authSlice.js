import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_AUTH_SIGNUP, URL_AUTH_LOGIN } from "../../constants/firebase";

const initialState = {
  token: null,
  userId: null,
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

export const logIn = createAsyncThunk("auth/logIn", async (userData) => {
  const { email, password } = userData;
  console.log(email, password);

  try {
    const response = await fetch(URL_AUTH_LOGIN, {
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
  reducers: {
    logOut: (state) => {
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action.payload);
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
