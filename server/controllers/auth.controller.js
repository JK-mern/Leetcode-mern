import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(404, "User not Found"));
      return;
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      next(errorHandler(404, "Invalid username or password"));
      return;
    }
    validUser.password = undefined;
    const token = jwt.sign({id : validUser._id}, process.env.JWT_SECRET_KEY)
    res.cookie('accessToken', token,{httpOnly : true, maxAge: 30*24*60*60*1000}).status(200).json(validUser);
  } catch (error) {
    next(error);
  }
};

export const signup = async (req, res, next) => {
  try {
    const { username, email, password, isAdmin } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = new User({ username, email, password: hashedPassword, isAdmin : isAdmin||false });
    await newUser.save();
    res.status(201).json("User has been created Succesfully");
  } catch (error) {
    if (error.code === 11000) {
      next(errorHandler(403, "User Already Exist"));
      return;
    }
    next(error);
  }
};


export const signOut = (req,res,next) =>{
  try {
    res.clearCookie('accessToken')
    res.status(200).json("User signed out successfully")
  } catch (error) {
    next(error)
  }
  
}




