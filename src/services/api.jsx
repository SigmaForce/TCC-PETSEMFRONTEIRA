import axios from "axios";
import { getUserLocalStorage } from "../contexts/AuthProvider/utils";

export const userApi = axios.create({
  baseURL: "http://localhost:3000/users/",
});

userApi.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();
    config.headers.Authorization = user?.token;
    return config;
  },
  (error) => {}
);
