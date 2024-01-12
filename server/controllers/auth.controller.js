import mongoose from "mongoose"
import User from "../models/user.model.js"
import  bcrypt from 'bcryptjs'

export const signin = (req,res) =>{
    res.json("signed In")

}

export const signup = async(req,res) =>{
   try {

        const {username, email , password } = req.body
        const hashedPassword = bcrypt.hashSync(password, 12);
        const newUser = new User ( {username, email, password : hashedPassword})
        await newUser.save()
        res.status(201).json("User has been created Succesfully");

   } catch (error) {
    console.log(error)
   }
}