import mongoose from "mongoose";

const userScheme = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  password: {
    type : String,
    required : true
  }
}, {timestamps : true});

const User = new mongoose.model( 'User' , userScheme)
export default User


