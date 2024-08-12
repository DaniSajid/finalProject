import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

    
    cloudinary.config({ 
        cloud_name:process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret: process.env.CLOUD_API_SECRET
    });
 
     const uploadOnCloudinary = async (filePath) => {
        try {
            if(!filePath) return "could not find image";
            const response = await cloudinary.uploader.upload(filePath, {
                resource_type: "auto",
            });
            console.log("file is uploaded on cloudinary", response.url);
            return response;
        } catch (error) {
            fs.unlinkSync(filePath);
        }
    }

    export {uploadOnCloudinary};
