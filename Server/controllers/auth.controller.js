import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

const cookieOptions = {
  httpOnly: true, // JS can't access it
  secure: false, // send only on HTTPS in prod
  sameSite: "strict", // prevent CSRF
  maxAge: 1000 * 60 * 60, // 1 hour (match JWT_EXPIRES_IN)
};

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    if (password.length < 8) {
      const error = new Error("Password must be atleast 8 charachters");
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create(
      [{ firstName, lastName, email, password: hashedPassword }],
      { session }
    );

    const token = jwt.sign({ userID: newUser[0]._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.cookie("access_token", token, cookieOptions);

    res.status(201).json({
      message: "User created successfully",
      user: {
          id: newUser[0]._id,
          firstName: newUser[0].firstName,
          lastName: newUser[0].lastName,
          email: newUser[0].email,
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

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User doesn't exist");
      error.statusCode = 404;
      throw error;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      const error = new Error("Incorrect Password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign({ userID: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.cookie("access_token", token, cookieOptions);

    res.status(200).json({
      message: "Logged in successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const signOut = async(req,res,next)=>{
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: false, // only secure in prod
      sameSite: "strict",
      expires: new Date(0), // expire immediately
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error)
    next(error)
  }

}