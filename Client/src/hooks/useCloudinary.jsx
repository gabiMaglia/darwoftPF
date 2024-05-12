import { useState } from "react";
import { cloudinaryUpload } from "../services/productServices/imageUploadService";

const useCloudinary = () => {
  const [files, setFiles] = useState([]);

  const uploadImagesToCloudinary = async (event) => {
    const uploadedFiles = event.currentTarget.files;
    if (uploadedFiles.length) {
      const urls = [];
      for (let file of uploadedFiles) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "preset_react");
        try {
          const imageUrl = await cloudinaryUpload(data);
          urls.push(imageUrl);
        } catch (error) {
          console.error("Failed to upload image: ", error);
        }
      }
      setFiles(urls);
    }
  };

  return [setFiles, files, uploadImagesToCloudinary];
};

export default useCloudinary;
