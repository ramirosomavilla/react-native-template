import apiClient from "../config";
import { ApiResponse, LoginRequest, RegisterRequest, User } from "../../types";
import { storeData } from "../../utils/storage";
import { mockToken, mockUser } from "../../constants/mockedData";

const authService = {
  login: async (credentials: LoginRequest) => {
    let response: ApiResponse<{ user: User; token: string }> = {
      data: {
        user: mockUser,
        token: "",
      },
      success: false,
      message: "Error al iniciar sesión",
    };
    // Mocked login response
    if (
      credentials.email === "usuario@ejemplo.com" &&
      credentials.password === "123456"
    ) {
      response = {
        data: {
          user: mockUser,
          token: mockToken,
        },
        success: true,
        message: "Login exitoso",
      };
    }
    // Here you can add your own API call to login a user
    // const response = await apiClient.post<
    //   ApiResponse<{ user: User; token: string }>
    // >("/auth/login", credentials);

    // Store token in AsyncStorage
    if (response.success) {
      await storeData("authToken", response.data.token);
    }

    return response.data;
  },

  register: async (userData: RegisterRequest) => {
    // Mocked register response
    const response = {
      data: {
        user: mockUser,
        token: mockToken,
      },
      success: true,
      message: "Registro exitoso",
    };

    // Here you can add your own API call to register a new user
    // const response = await apiClient.post<
    //   ApiResponse<{ user: User; token: string }>
    // >("/auth/register", userData);

    // Store token in AsyncStorage
    if (response.success) {
      await storeData("authToken", response.data.token);
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
