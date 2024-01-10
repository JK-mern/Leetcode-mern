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




app.get('/' , (req,res) => {
    res.send("Hello world")
})

app.listen( port , () =>{
    console.log(`Server has started on Port: ${port}`)
})



