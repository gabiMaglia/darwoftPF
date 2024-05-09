import axios from "axios";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";

const getAllProducts = async() => {
    try {
        const {data} = await axios.get(`${URL}/cat/group`)
        if (!data.error) return data;
        toast.error(data.message) 
    } catch (error) {
        toast.error(error)
    }
}
const getProductById = async(id) => {
    // try {
        
    // } catch (error) {
        
    // }finally {

    // }
}
const postProduct = async() => {
    // try {
        
    // } catch (error) {
        
    // }finally {

    // }
}
const deleteProduct = async() => {
    // try {
        
    // } catch (error) {
        
    // }finally {

    // }
}