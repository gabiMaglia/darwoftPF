import {axiosInstance, axiosAuthInstance} from "../../utils/axiosConfig";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";

export const getAllProducts = async () => {
  try {
    const { data } = await axiosInstance.get(`${URL}/product`);
    return data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Error de conexión";
    toast.error(message);
    return null;
  }
};

export const getProductById = async (id) => {
  // try {
  // } catch (error) {
  // }finally {
  // }
};
export const postProduct = async () => {
  // try {
  // } catch (error) {
  // }finally {
  // }
};
export const deleteProduct = async (id) => {
  try {
    const { data } = await axiosAuthInstance.delete(`${URL}/product/${id}`);
    if (!data.error) {
      toast.success("Producto eliminado");
      return data;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
  }
};
