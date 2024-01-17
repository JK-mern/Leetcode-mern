import express from 'express'
import dotenv from 'dotenv'
import connectDb  from './utils/db.js';
import authRouter from './routes/auth.route.js'
dotenv.config()

const app = express();
const port = 3001;

connectDb();

app.use(express.json())



app.use("/api/auth",authRouter)



app.use((err,req,res,next) =>{
    console.log(err)
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({ success: false, statusCode, message });
})

app.listen( port , () =>{
    console.log(`Server has started on Port: ${port}`)
})



