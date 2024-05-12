import axios from "axios";

export const cloudinaryUpload = async (data) => {
    try {
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/atlasair/image/upload",
            data
        );
        return response.data.secure_url; 
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }
};
