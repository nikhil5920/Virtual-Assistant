import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
const uploadOnCloudinary = async () =>{
        // Configuration
        cloudinary.config({ 
            cloud_name: process.env.CLOUDE_NAME, 
            api_key: process.env.API_KEY, 
            api_secret: process.env.API_SECRET_KEY // Click 'View API Keys' above to copy your API secret
        });
    

    try {
        // Upload an image
        const uploadResult = await cloudinary.uploader.upload(filePath)
        fs.unlinkSync(filePath)
        return uploadResult.secure_url;
    } catch (error) {
        return resizeBy.status(500).json({ message: "Cloudinary Error". error});
    }
}

export default uploadOnCloudinary;