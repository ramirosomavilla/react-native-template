import apiClient from "../config";
import { ApiResponse, User, UpdateUserRequest } from "../../types";

const userService = {
  getUserProfile: async () => {
    const response = await apiClient.get<ApiResponse<User>>("/users/profile");
    return response.data;
  },

  updateUserProfile: async (userData: UpdateUserRequest) => {
    const response = await apiClient.put<ApiResponse<User>>(
      "/users/profile",
      userData
    );
    return response.data;
  },

  getAllUsers: async () => {
    const response = await apiClient.get<ApiResponse<User[]>>("/users");
    return response.data;
  },

  getUserById: async (userId: string) => {
    const response = await apiClient.get<ApiResponse<User>>(`/users/${userId}`);
    return response.data;
  },

  deleteUser: async (userId: string) => {
    const response = await apiClient.delete<ApiResponse<null>>(
      `/users/${userId}`
    );
    return response.data;
  },

  changeUserRole: async (userId: string, role: string) => {
    const response = await apiClient.patch<ApiResponse<User>>(
      `/users/${userId}/role`,
      { role }
    );
    return response.data;
  },

  changePassword: async (oldPassword: string, newPassword: string) => {
    const response = await apiClient.post<ApiResponse<null>>(
      "/users/change-password",
      { oldPassword, newPassword }
    );
    return response.data;
  },

  uploadProfileImage: async (formData: FormData) => {
    const response = await apiClient.post<ApiResponse<{ imageUrl: string }>>(
      "/users/profile/image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
};

export default userService;
