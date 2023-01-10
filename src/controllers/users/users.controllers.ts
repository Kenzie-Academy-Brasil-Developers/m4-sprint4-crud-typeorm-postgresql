import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../../interfaces";
import { createUserService, listUserService, updateUserService, softDeleteUserService } from "../../services";

const createUserController = async (req: Request, res: Response) => {
    const newUserData: IUserRequest = req.body
    const newUser = await createUserService(newUserData)
    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUserService()
    return res.status(200).json(users)
}  

const updateUserController = async (req: Request, res: Response) => {
    const updateUserData: IUserUpdate = req.body
    const updateUserId = req.params.id
    const updateUser = await updateUserService(updateUserData, updateUserId)
    return res.json(updateUser)
}

const softDeleteUserController = async (req: Request, res: Response) => {
    const softDeleteUserId = req.params.id
    const softDeleteUser = await softDeleteUserService(softDeleteUserId)
    return res.status(204).json(softDeleteUser)
}

export { 
    createUserController, 
    listUsersController,
    updateUserController,
    softDeleteUserController
}