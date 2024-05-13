import { axiosInstance, axiosAuthInstance } from "../utils/axiosConfig";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";

export const updateUser = async (id, userData) => {
  try {
    const { data } = await axiosAuthInstance.patch(`${URL}/user/${id}`, {
      userData,
    });

    if (!data.error) {
      toast.success("Usuario Actualizado");

      return data;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
    return { error: true };
  }
};
