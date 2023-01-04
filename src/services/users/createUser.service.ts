import AppDataSource from "../../data-source"
import { IUser, IUserRequest } from "../../interfaces"
import { User } from "../../entities/user.entity"
import { newUserSerializer } from "../../serializers/user.serializers"

const createUserService = async (newUserData: IUserRequest): Promise<IUser> => {
    
    const userRepository = AppDataSource.getRepository(User)
    const user = userRepository.create(newUserData)
    await userRepository.save(user)

    const userReturn = await newUserSerializer.validate(user, {
        stripUnknown: true
    })

    return userReturn
    
}

export default createUserService