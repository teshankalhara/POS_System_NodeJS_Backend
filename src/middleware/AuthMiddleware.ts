import { Request, Response, NextFunction } from "express"
import { validateJwt } from "../security/jwt"

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    const token = authHeader?.replace("Bearer ", "")
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    if (!validateJwt(token)) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    next()
}