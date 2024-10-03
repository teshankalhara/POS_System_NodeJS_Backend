import mongoose, { Schema } from "mongoose";
import ProductType from "../interface/ProductType";

const ProductSchema = new Schema<ProductType>({
    name: {
        type: String,
        required: true,
        trim: true
    }, description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true

    },
    category: {
        type: Schema.Types.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}) 

const ProductModel=mongoose.model<ProductType>('Product',ProductSchema)

export default ProductModel