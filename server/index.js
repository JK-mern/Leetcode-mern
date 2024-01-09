import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = 3001;


app.use(express.json())


app.listen( port , () =>{
    console.log(`Server has started on Port: ${port}`)
})



