import mongoose, { Schema, mongo } from "mongoose";

const problemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    example: [
      {
        input: {
          type: String,
        },
        output: {
          type: String,
        },
        explanation: {
          type: String,
        },
      },
    ],


    followUp: {
      type: String,
    },
  },
  { timestamps: true }
);

const Problem = new mongoose.model("Problem", problemSchema);
export default Problem;
