import axios from "axios";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";
// GET
export const getAllCategoryGroups = async() => {
    try {
    
        const {data} = await axios.get(`${URL}/cat/group`)
        if (!data.error) return data;
        toast.error(data.message) 
    } catch (error) {
        toast.error(error)
    }
}
export const getAllCategories = async() => {
    try {
        const {data} = await axios.get(`${URL}/cat`)
        if (!data.error) return data;
        toast.error(data.message) 
    } catch (error) {
        toast.error(error)
    }
}
// POST
export const postCategory = async() => {
    // try {
        
    // } catch (error) {
        
    // }finally {

    // }
}
export const postCategoryGroup = async() => {
    // try {
        
    // } catch (error) {
        
    // }finally {

    // }
}
// DELETE
export const deleteCategory = async() => {
    // try {
        
    // } catch (error) {
        
    // }finally {

    // }
}
export const deleteCategoryGroup = async() => {
    // try {
        
    // } catch (error) {
        
    // }finally {

    // }
}


