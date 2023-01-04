import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../../interfaces";

import { createUserService, listUserService, updateUserService, deleteUserService } from "../../services";

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
    // const updatedUser = await updateUserService(updateUserData)
    // return res.status(200).json(updatedUser)
}

const deleteUserController = async (req: Request, res: Response) => {

}

export { 
    createUserController, 
    listUsersController,
    updateUserController,
    deleteUserController 
}