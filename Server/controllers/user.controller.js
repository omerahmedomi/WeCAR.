import mongoose from "mongoose"
import User from "../model/user.model.js"
export const getAllUsers = async (req,res,next) =>{

   try {
     const users = await User.find()
 
     res.status(200).send({message:'Users fetched succesfully',users})
   } catch (error) {
    next(error)
    console.log(error)
    
   }


}