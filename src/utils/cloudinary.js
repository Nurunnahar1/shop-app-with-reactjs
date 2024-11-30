import axios from "axios";

export const cloudinaryImageUpload = async ({ file, cloudName, preset }) => {
    //create form data
    const form_data = new FormData();
    form_data.append("file", file);
    form_data.append("upload_preset", preset);

    const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, form_data);
    return response.data;
}