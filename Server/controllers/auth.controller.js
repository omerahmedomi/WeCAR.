import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    console.log(req.body)
    const { firstName, lastName, email, password } = req.body;


    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    if(password.length < 8) {
        const error =new Error('Password must be atleast 8 charachters')
        throw error
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUsers = await User.create(
      [{ firstName, lastName, email, password: hashedPassword }],
      { session }
    );

    const token = jwt.sign({ userID: newUsers[0]._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(201).json({
      message: "User created successfully",
      data: {
        token,
        user: newUsers[0],
      },
    });

    await session.commitTransaction();
    session.endSession();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error(error);
    next(error);
  }
};

export const signIn= async (req,res,next)=>{

  const {email,password} = req.body
  try {
    const user = await User.findOne({email})
      if (!user) {
        const error = new Error("User doesn't exist");
        error.statusCode = 404
        throw error
      } 

      const isPasswordValid =  await bcrypt.compare(password,user.password)

      if(!isPasswordValid) {
        const error = new Error('Incorrect Password')
        error.statusCode = 401;
        throw error
      }

      const token = jwt.sign({userId:user._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})

      res.status(200).json({
        message:"Logged in successfully",
        data:{
          token,
          user
        }
      })

  } 

  catch (error) {
    console.log(error)
    next(error)
  }
}
