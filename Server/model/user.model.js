import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2,'First name must be atleast 2 characters long'],
      maxlength: 25,
    },
    lastName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: 2,
      maxlength: 25,
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
      minlength: 8
    },
    role:{
      type:String,
      required:true,
      enum:['user','admin','super admin'],
      default:'user'
    }
  
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
