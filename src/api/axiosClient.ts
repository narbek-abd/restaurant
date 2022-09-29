import axios from "axios";

const axiosClient = axios.create({
  baseURL: `localhost/`,
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
        const response = await axiosClient(`/refresh`, {
          withCredentials: true,
        });

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
