import mongoose, { connect }  from "mongoose";

const connectDb =  async() => {
    try{
        await mongoose.connect(process.env.MONGO )
        console.log("Conneted to Database Successfully")
    }catch(error)
    {
        console.log(error)
    }
}

export default connectDb