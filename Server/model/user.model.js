import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minLength: 2,
      maxLength: 25,
    },
    lastName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minLength: 2,
      maxLength: 25,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 8,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User',userSchema)
export default User;