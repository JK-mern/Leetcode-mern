import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import authRouter from "./routes/auth.route.js";
import problemRouter from "./routes/problem.route.js";
import submitRouter from './routes/submission.route.js'
import userRouter from './routes/user.route.js'
import cookieParser from "cookie-parser";
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

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(port, () => {
  console.log(`Server has started on Port: ${port}`);
});
