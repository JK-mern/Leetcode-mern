import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"

export const deleteUser = async(req,res,next) =>{
    if(req.user.id !== req.params.id)
        return next(errorHandler(401, "You can only update your own account") )
    else
    {
        try {
            await User.findOneAndDelete(req.params.id)
            res.clearCookie('accessToken')
            res.status(200).json("User deleted Successfully")
        } catch (error) {
            next(error)            
        }
    }
}