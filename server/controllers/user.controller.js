import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account"));
  else {
    try {
      await User.findOneAndDelete(req.params.id);
      res.clearCookie("accessToken");
      res.status(200).json("User deleted Successfully");
    } catch (error) {
      next(error);
    }
  }
};

export const updateUser = async (req, res, next) => {
  try {
    

    if (req.user.id !== req.params.id)
      return next(errorHandler(401, "You can only Update your Profile!"));

    if (req.body.password)
      req.body.password = bcrypt.hashSync(req.body.password, 10);

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.username,
          avatar: req.body.avatar,
          password: req.body.password,
        },
      },
      { new: true }
    );
    updatedUser.password = undefined;
    res.status(200).json(updatedUser);
  } catch (error) {}
};
