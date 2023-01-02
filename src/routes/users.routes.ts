import { Router } from "express";
import app from "../app";
import { createUserController,listUsersController, updateUserController, deleteUserController } from "../controllers"

const userRoutes = Router()

userRoutes.post("", createUserController)
userRoutes.get("", listUsersController)
userRoutes.patch("/:id", updateUserController)
userRoutes.delete("/:id", deleteUserController)

export default userRoutes