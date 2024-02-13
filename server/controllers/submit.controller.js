import Solution from "../models/userCode.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

export const submitSolution = async (req, res, next) => {
  try {
    const userSolution = await Solution.findOne({ userId: req.user._id });

    if (!userSolution) {
      const solution = {
        userId: req.user._id,
        CodeSubmitted: [
          {
            questionId: new mongoose.Types.ObjectId(req.body.questionId),
            Code: {
              [req.body.lang]: req.body.code,
            },
          },
        ],
      };
      const newSolution = new Solution(solution);
      await newSolution.save();
      res.status(200).json("Code submitted Succesfully");
    } else {
      const questionExist = userSolution.CodeSubmitted.find((code) =>
        code.questionId.equals(new ObjectId(req.body.questionId))
      );
      if (questionExist) {
        if (questionExist && questionExist.Code.has(req.body.lang)) {
          questionExist.Code.set(req.body.lang, req.body.code);
          const result = await Solution.findOneAndUpdate(
            {
              userId: req.user._id,
              "CodeSubmitted.questionId": req.body.questionId,
            },
            { $set: { "CodeSubmitted.$.Code": questionExist.Code } },
            { new: true }
          );
          res.status(200).json("Code submitted Successfully");
        } else {
          questionExist.Code.set(req.body.lang, req.body.code);
          const result = await Solution.findOneAndUpdate(
            {
              userId: req.user._id,
              "CodeSubmitted.questionId": req.body.questionId,
            },
            {
              $set: { "CodeSubmitted.$.Code": questionExist.Code },
            },
            {
              new: true,
            }
          );
          res.status(200).json("Code submitted Succesfully");
        }
      } else {
        const submitCode = {
          questionId: new mongoose.Types.ObjectId(req.body.questionId),
          Code: {
            [req.body.lang]: req.body.code,
          },
        };

        const result = await Solution.findOneAndUpdate(
          { userId: req.user._id },
          {
            $push: {
              CodeSubmitted: submitCode,
            },
          }
        );
        res.status(200).json("Code submitted successfully");
      }
    }
  } catch (error) {
    next(error);
  }
};

export const getSolution = async (req, res, next) => {
  try {
    const userSolution = await Solution.findOne(
      {
        userId: req.user._id,
        "CodeSubmitted.questionId": req.params.questionId,
      },
      {
        "CodeSubmitted.$": 1, // Include only the first matched element of CodeSubmitted array
      }
    );
    const item = userSolution.CodeSubmitted.find((item) =>
      item.Code.has(req.params.lang)
    );
    if (item) {
      const langCode = item.Code.get(req.params.lang);
      res.status(200).json(langCode);
    } else {
      res.status(200).json("");
    }
  } catch (error) {
    next(error);
  }
};
