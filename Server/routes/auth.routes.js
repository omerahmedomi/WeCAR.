import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import User from "./../model/user.model.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-out");
authRouter.get("/me", authMiddleware, async (req, res) => {
  try {
    // Find user but only send safe fields
    const user = await User.findById(req.userID).select(
      "id firstName lastName email"
    );
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default authRouter;
