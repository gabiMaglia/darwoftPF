import {axiosInstance, axiosAuthInstance} from "../../utils/axiosConfig";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";

export const getAllBrands = async () => {
  try {
    const { data } = await axiosInstance.get(`${URL}/brand`);
    if (!data.error) return data;
    toast.error(data.message);
  } catch (error) {
    toast.error(error);
  }
};
export const postBrand = async (brandData, token) => {
  // try {
  // } catch (error) {
  // }finally {
  // }
};
export const updateBrand = async (brandData, token) => {
  // try {
  // } catch (error) {
  // }finally {
  // }
};
export const deleteBrand = async (id, token) => {
  try {
    const { data } = await axiosAuthInstance.delete(`${URL}/brand/${id}`);
    if (!data.error) return data;
    toast.error(data.message);
  } catch (error) {
    toast.error(error);
  }
};
