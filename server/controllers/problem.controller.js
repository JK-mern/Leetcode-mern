import Problem from "../models/problem.model.js";
import { errorHandler } from "../utils/error.js";

export const addProblems = async (req, res, next) => {
  const { title } = req.body;
  const checkExist = await Problem.findOne({ title });
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

export const getAllProblems = async (req, res, next) => {
  try {
    const skipValue = parseInt(req.query.skip) || 0;
    const problems = await Problem.find()
      .skip(skipValue)
      .sort({ createdAt: 1 })
      .limit(10);
    const problem = problems.map((prob) => ({
      title: prob.title,
      difficulty: prob.difficulty,
    }));
    res.json(problem);
  } catch (error) {
    next(error);
  }
};

export const getProblem = async (req, res, next) => {
  try {
    const title = req.params.title;
    const problem = await Problem.findOne({ title });
    if (!problem) return next(errorHandler(401, "Problem Not Found"));

    res.json(problem);
  } catch (error) {
    next(error);
  }
};

export const searchPattern = async (req, res, next) => {
  try {
    const pattern = req.query.pattern;
    if (pattern) {
      const problems = await Problem.find({ tags: pattern });
      res.status(200).json(problems);
    }
    else
    {
      res.status().json("Seach pattern is not valid ")
    }
  } catch (error) {
    next(error);
  }
};
