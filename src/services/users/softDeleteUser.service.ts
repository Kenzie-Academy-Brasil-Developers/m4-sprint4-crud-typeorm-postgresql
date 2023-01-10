import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

const softDeleteUserService = async (softDeleteUserId: string) => {
    
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({
        id: softDeleteUserId
    })  

    if(findUser.isActive === false) {
        throw new AppError("User is already inactive", 400)

    } 
    findUser.isActive = false
    await userRepository.save(findUser)
    
    return {}
       
}

export default softDeleteUserService