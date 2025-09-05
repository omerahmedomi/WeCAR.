import { JWT_SECRET } from "../config/env.js"
import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {

  const token = req.cookies?.access_token; // read token from cookie
console.log("token",token)
  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
  
    // Attach user ID to req object
    req.userID = decoded.userID;
    next();
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;