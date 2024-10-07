import mongoose, { Schema } from "mongoose";
import UserType from "../interface/UserType";

const UserSchema = new Schema<UserType>({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const UserModel=mongoose.model<UserType>('user',UserSchema)

export default UserModel