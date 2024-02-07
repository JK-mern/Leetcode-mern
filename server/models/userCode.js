import mongoose from "mongoose";

const userCodeSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  CodeSubmitted: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Problems",
        required: true,
      },
      Code: {
        type : Map,
        of : String
      }
    },
  ],
});
