import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const verifyUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const userRepository = AppDataSource.getRepository(User)
    const validateId = await userRepository.findOneBy({
        id: req.params.id
    })

    if(!validateId){
        throw new AppError("User is not the owner", 404) 
    }

    return next()
}

export { verifyUserExistsMiddleware}









