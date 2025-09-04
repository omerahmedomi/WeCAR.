import {config} from 'dotenv'

config({path:'.env'})

export const {
    DB_URI,
    PORT,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    SUPER_ADMIN_EMAIL,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
} = process.env