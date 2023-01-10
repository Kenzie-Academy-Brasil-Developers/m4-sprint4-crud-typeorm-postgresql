import AppDataSource from "../../data-source"
import { IUser, IUserUpdate } from "../../interfaces"
import { User } from "../../entities/user.entity"
import { newUserSerializer } from "../../serializers/user.serializers"

const updateUserService = async (updateUserData: IUserUpdate, updateUserId: string): Promise<IUser> => {
    
    const userRepository = AppDataSource.getRepository(User) 
    
    const findUser = await userRepository.findOneBy({
        id: updateUserId
    })

    const updatedUser = userRepository.create({
        ...findUser,
        ...updateUserData
    })
    await userRepository.save(updatedUser)
    
    const returnUpdatedUser = await newUserSerializer.validate(updatedUser, {
        stripUnknown: true
    })

    return returnUpdatedUser

}

export default updateUserService 