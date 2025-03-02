import apiClient from "../config";
import { ApiResponse, LoginRequest, RegisterRequest, User } from "../../types";
import { storeData } from "../../utils/storage";

const authService = {
  login: async (credentials: LoginRequest) => {
    const response = await apiClient.post<
      ApiResponse<{ user: User; token: string }>
    >("/auth/login", credentials);

    // Store token in AsyncStorage
    if (response.data.success) {
      storeData("authToken", response.data.data.token);
    }

    return response.data;
  },

  register: async (userData: RegisterRequest) => {
    const response = await apiClient.post<
      ApiResponse<{ user: User; token: string }>
    >("/auth/register", userData);

    // Store token in AsyncStorage
    if (response.data.success) {
      storeData("authToken", response.data.data.token);
    }

    return response.data;
  },

  logout: async () => {
    try {
      await apiClient.post("/auth/logout");
      // Clear storage
      storeData("authToken", null);
      return true;
    } catch (error) {
      return false;
    }
  },

  forgotPassword: async (email: string) => {
    const response = await apiClient.post<ApiResponse<null>>(
      "/auth/forgot-password",
      { email }
    );
    return response.data;
  },
};

export default authService;
