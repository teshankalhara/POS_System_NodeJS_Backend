import express,{Application,Request,Response} from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import CategoryRoutes from './routes/CategoryRoutes'

dotenv.config()

const app:Application=express()

app.use(express.json())
connectDB()

app.get('/',(req:Request,res:Response)=>{
    res.send("Hello")
})

app.use('/api',CategoryRoutes)

app.listen(8888,()=>{
    console.log("Server Running...")
})