import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const verifyUserIsAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    if(req.user.isAdm === false){
        throw new AppError("User is not the admin", 403) 
    }
    return next()
}

export { verifyUserIsAdmMiddleware}


