import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "Src/api";
import { LoginFormTypes, RegisterFormTypes } from "Src/types/FormTypes";

export const registerUser = createAsyncThunk(
  "user/register",
  async (registerData: RegisterFormTypes) => {
    const response = await api.users.registerUser(registerData);
    _setTokenToStorage(response.data.accessToken);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData: LoginFormTypes) => {
    const response = await api.users.loginUser(loginData);
    _setTokenToStorage(response.data.accessToken);
    return response.data;
  }
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
  return localStorage.removeItem("access-token");
});

export const getUser = createAsyncThunk("user/get", async () => {
  const response = await api.users.getCurrentUser();
  _setTokenToStorage(response.data.accessToken);

  return response.data;
});

function _setTokenToStorage(accessToken: string) {
  localStorage.setItem("access-token", accessToken);
}
