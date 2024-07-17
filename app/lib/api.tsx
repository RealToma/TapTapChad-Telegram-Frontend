import axios from "@/app/axios";

export const updateItem = async (id: any, mount: number) => {
  try {
    const response = await axios.put(
      `https://taptapchad-telegram-backend.onrender.com/users`,
      {
        user: id,
        mount,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update item", error);
    throw error;
  }
};

export const getItem = async (id: string) => {
  try {
    const response = await axios.get(
      `https://taptapchad-telegram-backend.onrender.com/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to get item", error);
    throw error;
  }
};
