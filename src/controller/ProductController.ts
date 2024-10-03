import { Request, Response } from "express"
import ProductModel from "../models/ProductModel"

export const createProduct=async(req:Request,res:Response)=>{
    const {name,description,price,category}=req.body
    try {
        const product=new ProductModel(
            {name,description,price,category}
        )
        // product.name=name
        // product.description=description
        // product.price=price
        // product.category=category

        await product.save()
    } catch (error:any) {
        console.log(error)
    }
}

export const getProduct = async (req: Request, res: Response) => {
    const product = await ProductModel.find()
    if (product != null) {
        return res.status(200).json(product)
    }
    return res.status(400).json("Empty")
}