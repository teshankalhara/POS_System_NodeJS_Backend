import { Request, Response } from "express"
import UserModel from "../models/UserModel"
import bcrypt from 'bcryptjs'
import { generateJwt } from "../security/jwt"

export const Login = async (req: Request, res: Response) => {
    const { username, password } = req.body
    try {
        const user = await UserModel.findOne({ username: username })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const passwordValidate = await bcrypt.compare(password, user.password)
        if (!passwordValidate) {
            return res.status(404).json({ message: "Invalid credentials" })
        }
        const token = generateJwt(user)
        return res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, username: user.username }
        })
    } catch (error: any) {
        return res.status(500).json({ error: error.message })
    }
}