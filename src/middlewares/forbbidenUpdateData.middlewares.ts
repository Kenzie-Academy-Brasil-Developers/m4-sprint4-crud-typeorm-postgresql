import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const forbbidenUpdateDataMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const userData = req.body

    if(Object.keys(userData).includes("id" || "isAdm" || "isActive")){
        throw new AppError("Unauthorized field update", 401)
    }

    return next()
}

export { forbbidenUpdateDataMiddleware }