import axios from "axios";
import { getToken } from "../auth";
export const BASE_URL = "http://localhost:8080";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const myPrivateAxios = axios.create({
  baseURL: BASE_URL,
});

myPrivateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
  },
  (error) => Promise.reject(error)
);
