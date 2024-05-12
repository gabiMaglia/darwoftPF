import { axiosInstance, axiosAuthInstance } from "../../utils/axiosConfig";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";

export const getAllBrands = async () => {
  try {
    const { data } = await axiosInstance.get(`${URL}/brand`);
    if (!data.error) return data;
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
  }
};
export const postBrand = async (brandData) => {
  try {
    const { data } = await axiosAuthInstance.post(`${URL}/brand`, {
      brandData,
    });
    if (!data.error) {
      toast.success("Marca Creada");
      console.log(data.response)
      return data.response;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
  }
};
export const updateBrand = async (id, brandData) => {
  try {
    const { data } = await axiosAuthInstance.patch(`${URL}/brand/${id}`, {
      brandData,
    });
    if (!data.error) {
      toast.success("Marca Actualizada");
      return data;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
  }
};
export const deleteBrand = async (id) => {
  try {
    const { data } = await axiosAuthInstance.delete(`${URL}/brand/${id}`);
    if (!data.error) {
      toast.success("Marca Eliminada");
      console.log(data)
      return data;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
  }
};
