import UserType from "../interface/UserType"
import jwt from "jsonwebtoken"

export const generateJwt = (user: UserType) => {
    const token = jwt.sign({
        username: user.username,
        sub: user._id
    }, process.env.JWT_SECRET || 'secret', {
        expiresIn: "1h"
    }
    )
    return token
}

export const validateJwt=(token:string)=>{
    jwt.verify(token,process.env.JWT_SECRET||'secret',(error,decode)=>{
        if(error){
            return false
        }else{
            return true
        }
    })
}

export const getUsernameFromJwt=(token:string)=>{
    const decoded=jwt.decode(token)
    if(!decoded){
        return null
    }
    return decoded.sub
}