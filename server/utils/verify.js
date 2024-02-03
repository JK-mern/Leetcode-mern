import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
import User from "../models/user.model.js";

export const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) return next(errorHandler(401, "unauthorized user"));

    const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(verify.id);
    next();
  } catch (error) {
    next(error);
  }
};

export const verifyAdmin = (req,res,next) =>{
    if(!req.user.isAdmin)
       return next(errorHandler("You need to be admin to access this"))

    next()
}
