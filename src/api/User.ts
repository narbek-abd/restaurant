import axiosClient from "./axiosClient";
import { RegisterFormTypes } from "../types/FormTypes";
import { LoginFormTypes } from "../types/FormTypes";

const Users = {
	getCurrentUser: () => axiosClient.get("/user/me"),
	registerUser: (data: RegisterFormTypes) => axiosClient.post("auth/registration/customer/new", data),
	loginUser: (data: LoginFormTypes) => axiosClient.post("/login", data),
	logoutUser: () => axiosClient.post("logout"),
};

export default Users;
