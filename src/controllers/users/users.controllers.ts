import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";

import { createUserService, listUserService, updateUserService, deleteUserService } from "../../services";

const createUserController = async (req: Request, res: Response) => {
    
    const userData: IUserRequest = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUserService()
    return res.status(200).json(users)
}

const updateUserController = async (req: Request, res: Response) => {

}

const deleteUserController = async (req: Request, res: Response) => {

}

export { 
    createUserController, 
    listUsersController,
    updateUserController,
    deleteUserController 
}