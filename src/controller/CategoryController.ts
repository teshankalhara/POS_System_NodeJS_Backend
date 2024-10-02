import { Request, Response } from 'express'
import CategoryModel from '../models/CategoryModel'

export const createCategory=async(req:Request,res:Response)=>{
    const {name}=req.body//const name=req.body.name

    try {
        const category=new CategoryModel()
        category.name=name
        await res.status(201).json(category)
    } catch (error:any) {
        console.log(error)    
    }
} 

export const getCategory=async(req:Request,res:Response)=>{
    const categories=await CategoryModel.find()
    if(categories==null){
        return res.status(201).json(categories)
    }
    return res.status(400).json("Empty")
}