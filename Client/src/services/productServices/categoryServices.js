import {axiosInstance, axiosAuthInstance} from "../../utils/axiosConfig";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";
// GET
export const getAllCategoryGroups = async () => {
  try {
    const { data } = await axiosInstance.get(`${URL}/cat/group`);
    if (!data.error) return data;
    throw new Error(data.message);
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Error de conexión";
    toast.error(message);
    return null;
  }
};
export const getAllCategories = async () => {
  try {
    const { data } = await axiosInstance.get(`${URL}/cat`);
    if (!data.error) return data;
    throw new Error(data.message);
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Error de conexión";
    toast.error(message);
    return null;
  }
};

// POST
export const postCategory = async () => {
  // try {
  // } catch (error) {
  // }finally {
  // }
};
export const postCategoryGroup = async () => {
  // try {
  // } catch (error) {
  // }finally {
  // }
};
// DELETE
export const deleteCategory = async () => {
  // try {
  // } catch (error) {
  // }finally {
  // }
};
export const deleteCategoryGroup = async () => {
  // try {
  // } catch (error) {
  // }finally {
  // }
};
