import mongoose from "mongoose";

const userCodeSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique:true
  },

  CodeSubmitted: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Problems",
        required: true,
        required : true
      },
      Code: {
        type : Map,
        of : String,
        required : true
      }
    },
  ],
});

const Solution = new mongoose.model("Solution", userCodeSchema )
export  default Solution
