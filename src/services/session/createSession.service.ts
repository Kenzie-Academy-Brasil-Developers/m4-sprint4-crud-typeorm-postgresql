import { ISessionRequest } from "../../interfaces"
import jwt from "jsonwebtoken"
import { compare } from "bcryptjs"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import "dotenv/config"

const createSessionService = async ({email, password} : ISessionRequest): Promise<string> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        email: email
    })

    if(!findUser){
        return "Invalid email or password"
    }

    const validatePasword = await compare(password, findUser.password)
    
    if(!validatePasword){
        return "Invalid email or password"
    }

    const token = jwt.sign(
        {
            id: findUser.id,
            email: findUser.email,
            isAdm: findUser.isAdm,
            isActive: findUser.isActive,
        },  
        process.env.SECRET_KEY,
        {
            subject: String(findUser.id),
            expiresIn: "24h"
        }
    )

    return token
}

export { createSessionService }