import {config} from 'dotenv'

config({path:'.env'})

export const {
    DB_URI,
    PORT,
    JWT_SECRET,
    JWT_EXPIRES_IN,
} = process.env