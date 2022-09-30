import axiosClient from "./axiosClient";
import { RegisterFormTypes } from "../types/FormTypes";
import { LoginFormTypes } from "../types/FormTypes";

const Users = {
	getCurrentUser: () => axiosClient.get("/auth/login/profile"),
	registerUser: (data: RegisterFormTypes) => axiosClient.post("auth/registration/customer/new", data),
	loginUser: (data: LoginFormTypes) => axiosClient.post("/auth/login", data),
	refreshToken: () => axiosClient.post('auth/login/refresh'),
};

export default Users;
