import { API_BASE_URL } from "../../../utils/constant";
import { EventFormValues } from "../../events/schemas/event.schema";

export const createEventApi = async (data: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
