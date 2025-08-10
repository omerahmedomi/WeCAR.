import mongoose from 'mongoose' 
import { DB_URI } from '../config/env.js'

if(!DB_URI){
    throw new Error('Please define the MONGODB_URI environment variable in .env file')
}

 const connectToDatabase = async ()=>{
    try {
        await mongoose.connect(DB_URI)
        console.log('Connected to daabase successfully')
        
    } catch (error) {
        console.error('Error connecting to db',error)
        process.exit(1)
        
    }
}

export default connectToDatabase