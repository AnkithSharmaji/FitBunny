// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: "UserName",
    email: "",
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Selector function to get isLoggedIn state
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
