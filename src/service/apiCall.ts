
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL

const apiCall = axios.create({
  baseURL: `${API_URL}/api/v1/members`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const jsonApi = axios.create({
  baseURL: `${API_URL}/api/v1/members`,
  headers: {
    "Content-Type": "application/json",
  },
});


export const becomeMember = async (data: FormData) => {
  try {
    const response = await apiCall.post("/register", data);
    return response.data;
  } catch (error) {
    console.error("Error becoming a member:", error);
    throw error;
  }
};

export const verifyEmail = async (data: { email: string; verificationCode: string }) => {
  try {
    const response = await jsonApi.post("/verify-email", data);
    return response.data;
  } catch (error) {
    console.error("Error verifying email:", error);
    throw error;
  }
};

export const resendVerificationCode = async (email: string) => {
  try {
    const response = await jsonApi.post("/resend-verification", { email });
    return response.data;
  } catch (error) {
    console.error("Error resending verification code:", error);
    throw error;
  }
};