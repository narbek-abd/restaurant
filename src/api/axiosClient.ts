import axios from "axios";
import api from ".";

const axiosClient = axios.create({
  baseURL: `http://188.225.83.80:6719/api/v1/`,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("access-token");

    if (authToken && config.headers) {
      config.headers.authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const initialRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._times) {
      initialRequest._times = 1;

      try {
        const response = await api.users.refreshToken();

        localStorage.setItem("access-token", response.data.accessToken);
        return axiosClient.request(initialRequest);
      } catch (e) {
        console.log("not auth");
      }
    }
    throw error;
  }
);

export default axiosClient;
