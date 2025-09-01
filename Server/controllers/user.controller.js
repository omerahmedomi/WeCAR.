import mongoose from "mongoose";
import User from "../model/user.model.js";
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find(req.Id);

    res.status(200).send({ message: "Users fetched succesfully", users });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const deletedUser = await User.findOneAndDelete(req.params.id);
    res.cookie("access_token", "", {
      httpOnly: true,
      secure: false, // only secure in prod
      sameSite: "strict",
      expires: new Date(0), // expire immediately
    });
    res.status(200).send({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const updateRole = async (req, res, next) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: role },
      { new: true }
    );
    res.status(200).send({ message: "User role updated successfully", user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
