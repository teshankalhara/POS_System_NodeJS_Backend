import { Request, Response } from 'express'
import CategoryModel from '../models/CategoryModel'

export const createCategory = async (req: Request, res: Response) => {
    const { name } = req.body
    //const name=req.body.name

    if (!name) {
        return res.status(422).json({ message: "Name Required!" })
    }

    try {
        const existingCategory = await CategoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(409).json({ message: "Category already exists" });
        }
        const category = new CategoryModel({ name })
        await category.save()
        //const category=new CategoryModel()
        //category.name=name
        //await CategoryModel.create(category)
        return res.status(201).json(category)
    } catch (error: any) {
        console.log(error)
    }
}

export const getCategory = async (req: Request, res: Response) => {
    const categories = await CategoryModel.find()
    if (categories != null) {
        return res.status(200).json(categories)
    }
    return res.status(400).json("Empty")
}