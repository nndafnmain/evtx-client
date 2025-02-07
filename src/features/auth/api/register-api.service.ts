import { API_BASE_URL } from "../../../utils/constant";

export const registerApiService = async (formData: {
  username: string;
  email: string;
  password: string;
  referralCode?: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
