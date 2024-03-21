import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import authRouter from "./routes/auth.route.js";
import problemRouter from "./routes/problem.route.js";
import submitRouter from './routes/submission.route.js'
import userRouter from './routes/user.route.js'
import cookieParser from "cookie-parser";
import nodemailer from 'nodemailer'
dotenv.config();

const app = express();
const port = 3001;

connectDb();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/problem", problemRouter);
app.use('/api/submit',submitRouter)
app.use('/api/user',userRouter)

app.post('/api/sendMail', async(req,res,next)=>{
  const{name,email,subject,message} = req.body
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.password,
    },
  });


  try {
    
    let info = await transporter.sendMail({
      from: email,
      to: 'jkmerndev@gmail.com',
      subject: subject,
      text: message,
    });
    console.log(info)
    res.status(200).send('Email sent successfully');
  } catch (error) {
    next(error)
  }

})


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(port, () => {
  console.log(`Server has started on Port: ${port}`);
});
