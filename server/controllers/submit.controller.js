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
          res.status(200).json(result);
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
          questionId : new mongoose.Types.ObjectId(req.body.questionId),
          Code : {
            [req.body.lang] : req.body.code
          }
        }
       
        const result = await Solution.findOneAndUpdate({userId: req.user._id} , {
          $push : {
            CodeSubmitted : submitCode
          }
        })
       res.status(200).json("Code submitted successfully")
      }
    }
  } catch (error) {
    next(error);
  }
};
