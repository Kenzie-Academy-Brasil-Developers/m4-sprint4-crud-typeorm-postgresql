import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"
import { AppError } from "../errors/AppError"

const ensureEmailAvailabilityMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const userRepository = AppDataSource.getRepository(User)

    const validateEmail = await userRepository.findBy({
        email: req.body.email
    })

    if(validateEmail.length > 0){
        throw new AppError("Invalid email or password", 400) 
    }

    return next()
}

export { ensureEmailAvailabilityMiddleware }