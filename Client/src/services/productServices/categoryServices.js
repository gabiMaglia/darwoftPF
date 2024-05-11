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
export const deleteCategory = async (id) => {
  try {
    const { data } = await axiosAuthInstance.delete(`${URL}/cat/${id}`);
    if (!data.error) {
      toast.success("Categoria Eliminada");
      return data;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
  }
};
export const deleteCategoryGroup = async (id) => {
  try {
    const { data } = await axiosAuthInstance.delete(`${URL}/cat/group/${id}`);
    if (!data.error) {
      toast.success("Categoria Eliminada");
      return data;
    }
  } catch ({ response }) {
    toast.error(response?.data?.message || "error");
  }
};
