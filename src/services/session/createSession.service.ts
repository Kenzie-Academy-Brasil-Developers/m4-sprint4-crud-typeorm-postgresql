import { IUserLogin } from "../../interfaces"
import jwt from "jsonwebtoken"
import { compare } from "bcryptjs"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import "dotenv/config"

const createSessionService = async ({email, password} : IUserLogin): Promise<string> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        email: email
    })

    if(!findUser){
        throw new AppError("Invalid email or password", 403) 
    }

    const validatePasword = await compare(password, findUser.password)
    
    if(!validatePasword){
        throw new AppError("Invalid email or password", 403) 
    }

    const token = jwt.sign(
        {
            email: findUser.email,
            isAdm: findUser.isAdm,
            isActive: findUser.isActive,
        },  
        "SECRET_KEY",
        {
            subject: String(findUser.id),
            expiresIn: "24h"
        }
    )

    return token
}

export { createSessionService }