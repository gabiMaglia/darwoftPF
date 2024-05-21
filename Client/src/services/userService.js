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
export const deleteUser = async () => {
  try {
    const { data } = await axiosAuthInstance.delete(`${URL}/user`);
    if (!data.error) {
      toast.success("Usuario Eliminado");

      return data;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
    return { error: true };
  }
};
export const addToWishlist = async (productId) => {
  try {

    const { data } = await axiosAuthInstance.patch(`${URL}/wish/add`, {productId: productId});
    if (!data.error) {
      toast.success("Producto agregado a tu lista de deseos");

      return data;
    }
  } catch ({ response }) {
    toast.error(`${response?.data?.message || "error"}, inicia sesion para realizar esta tarea` );
    return { error: true };
  }
};
export const removeFromWishlist = async (productId) => {
  try {
    const { data } = await axiosAuthInstance.patch(`${URL}/wish/remove`, {productId: productId});
    if (!data.error) {
      toast.success("Producto eliminado de tu lista de deseos");

      return data;
    }
  } catch ({ response }) {
    toast.error(`${response?.data?.message || "error"}, inicia sesion para realizar esta tarea` );
    return { error: true };
  }
};
