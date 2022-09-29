import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, logoutUser, registerUser } from "../actions/User";

export interface UserState {
  name: string;
  email: string;
  isAuth: boolean;
  loading: "idle" | "pending" | "succeeded" | "failed";
  errorMessage: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  isAuth: false,
  loading: "idle",
  errorMessage: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.email = payload.email;
        state.name = payload.name;
        state.loading = "succeeded";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = "failed";
      })

      // Login
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isAuth = true;
        state.email = payload.email;
        state.name = payload.name;
        state.loading = "succeeded";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = "failed";
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuth = false;
        state.email = "";
        state.name = "";
        state.loading = "succeeded";
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(logoutUser.rejected, (state) => {
        state.loading = "failed";
      })

      // getUser
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.email = payload.email;
        state.name = payload.name;
        state.loading = "succeeded";
      })
      .addCase(getUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default userReducer.reducer;
