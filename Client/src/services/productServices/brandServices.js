import axios from "axios";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";

export const getAllBrands = async() => {
    try {
        const {data} = await axios.get(`${URL}/brand`)
        if (!data.error) return data;
        toast.error(data.message) 
    } catch (error) {
        toast.error(error)
    }
}
export const postBrand = async() => {
    // try {
        
    // } catch (error) {
        
    // }finally {

    // }
}
export const deleteBrand = async() => {
    // try {
        
    // } catch (error) {
        
    // }finally {

    // }
}