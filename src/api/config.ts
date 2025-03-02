import axios from "axios";
import { getData } from "../utils/storage";

// API base URL
const BASE_URL = "https://api.example.com";

// Create axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for API calls
apiClient.interceptors.request.use(
  async (config) => {
    const token = await getData("authToken");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Add refresh token logic here if needed
        const refreshToken = await getData("refreshToken");
        if (refreshToken) {
          // Refresh token API call logic
        }
      } catch (refreshError) {
        // Handle refresh token failure
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
