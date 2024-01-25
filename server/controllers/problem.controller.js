import Problem from "../models/problem.model.js";
import { errorHandler } from "../utils/error.js";

export const addProblems = async (req, res, next) => {
  const { title } = req.body;
  const checkExist =await Problem.findOne({ title });
  if (checkExist)
    return next(errorHandler(403, "Problem with same title already exist"));

  const newProblem = new Problem(req.body);
  try {
    newProblem.save();
    res.status(200).json(newProblem);
  } catch (error) {
    next(error);
  }
};
