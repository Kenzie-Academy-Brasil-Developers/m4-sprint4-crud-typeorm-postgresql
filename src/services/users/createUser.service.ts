import { IUser, IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"

const createUserService = async (userData: IUserRequest): Promise<User> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const createdUser = userRepository.create(userData)

    await userRepository.save(createdUser)
    
    return createdUser
}

export default createUserService