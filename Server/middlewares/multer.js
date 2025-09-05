import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

// Setup storage to Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "car_rentals", // Cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png", "webp","avif"],
  },
});

const upload = multer({ storage });

export default upload;
