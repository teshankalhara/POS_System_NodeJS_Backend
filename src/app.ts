import express,{Application,Request,Response} from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import CategoryRoutes from './routes/CategoryRoutes'
import ProductRouter from './routes/ProductRoutes'
import UserRouter from './routes/UserRoutes'
import AuthRouter from './routes/AuthRoutes'
import { AuthMiddleware } from './middleware/AuthMiddleware'

dotenv.config()

const app:Application=express()

app.use(express.json())
connectDB()

app.get('/',(req:Request,res:Response)=>{
    res.send("Hello")
})

app.use('/user',UserRouter)
app.use('/user',AuthRouter)

app.use(AuthMiddleware)

app.use('/category',CategoryRoutes)
app.use('/product',ProductRouter)


app.listen(8888,()=>{
    console.log("Server Running...")
})