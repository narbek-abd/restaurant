import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "Src/api";
import { LoginFormTypes, RegisterFormTypes } from "Src/types/FormTypes";

export const registerUser = createAsyncThunk(
  "user/register",
  async (registerData: RegisterFormTypes) => {
    const response = await api.users.registerUser(registerData);
    localStorage.setItem("access-token", response.data.accessToken);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData: LoginFormTypes) => {
    const response = await api.users.loginUser(loginData);
    localStorage.setItem("access-token", response.data.accessToken);
    return response.data;
  }
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
  let responcse = await api.users.logoutUser();

  localStorage.removeItem("access-token");

  return responcse.data;
});

export const getUser = createAsyncThunk("user/get", async () => {
  const response = await api.users.getCurrentUser();
  localStorage.setItem("access-token", response.data.accessToken);

  return response.data;
});
