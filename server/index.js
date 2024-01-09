import express from 'express'
import dotenv from 'dotenv'
import connectDb  from './utils/db.js';
dotenv.config()

const app = express();
const port = 3001;

connectDb();

app.use(express.json())


app.listen( port , () =>{
    console.log(`Server has started on Port: ${port}`)
})



