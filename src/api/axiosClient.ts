import axios, { AxiosError, AxiosInstance } from "axios";
import queryString from "query-string";

import { envConfig, localstorageConfig } from "config";

const axiosClient: AxiosInstance = axios.create({
  baseURL: envConfig.baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(localstorageConfig.keys.AUTH_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  async (error: AxiosError) => {
    // const originalConfig = error.config; // we may need this in order to implement the refreshToken

    // Handle errors
    if (error && error.response && error.response.data) {
      throw error.response.data;
    }

    throw error;
  },
);

export { axiosClient };
