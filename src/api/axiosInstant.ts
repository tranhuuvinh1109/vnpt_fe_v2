import axios from "axios";
import { E_LOCAL_STORAGE } from "../enum";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const data = localStorage.getItem(E_LOCAL_STORAGE.APP_NAME);
    if (data) {
      const dataParsed = JSON.parse(data);

      config.headers.Authorization = `Bearer ${dataParsed.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
