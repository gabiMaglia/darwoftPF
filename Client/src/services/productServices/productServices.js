import { axiosInstance, axiosAuthInstance } from "../../utils/axiosConfig";
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
  try {
    const { data } = await axiosInstance.get(`${URL}/product/${id}`);
    return data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Error de conexión";
    toast.error(message);
    return null;
  }
};
export const postProduct = async (productData) => {
  try {
    const { data } = await axiosAuthInstance.post(`${URL}/product`, {
      productData,
    });
    if (!data.error) {
      toast.success("Producto agregado");
      return data;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
  }
};
export const updateProduct = async (id, productData) => {
  try {
    console.log(id, productData)
    const { data } = await axiosAuthInstance.patch(`${URL}/product/${id}`, {
      productData,
    });
    if (!data.error) {
      toast.success("Producto actualizado");
      return data;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
  }
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
