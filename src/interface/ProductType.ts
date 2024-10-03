import { Document } from "mongoose";
import CategoryType from "./CategoryType";

interface ProductType extends Document{
    name:string,
    description:string,
    price:number,
    category:CategoryType,
    createdAt:Date,
    updatedAt:Date
}

export default ProductType