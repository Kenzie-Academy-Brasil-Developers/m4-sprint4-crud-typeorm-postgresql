import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const forbbidenUpdateDataMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const userData = req.body
    const userDataKeys = Object.keys(userData)

    if(userDataKeys.includes("id") || userDataKeys.includes("isAdm") || userDataKeys.includes("isActive")){
        throw new AppError("Unauthorized field update", 401)
    }

    return next()
}

export { forbbidenUpdateDataMiddleware }