import express,{Application,Request,Response} from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'

dotenv.config()

const app:Application=express()

app.use(express.json())
connectDB()

app.get('/',(req:Request,res:Response)=>{
    res.send("Hello")
})

app.listen(8888,()=>{
    console.log("Server Running...")
})