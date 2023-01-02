import { IUser, IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { newUserSerializer } from "../../serializers/user.serializers"

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const createdUser = userRepository.create(userData)

    await userRepository.save(createdUser)

    const userReturn = await newUserSerializer.validate(createdUser, {
        stripUnknown: true
    })

    return userReturn
    
    return createdUser
}

export default createUserService