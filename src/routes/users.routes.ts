import { Router } from "express";
import app from "../app";
import { createUserController,listUsersController, updateUserController, deleteUserController } from "../controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.Middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createUserSerializer } from "../serializers/user.serializers";

const userRoutes = Router()

userRoutes.post("", ensureDataIsValidMiddleware(createUserSerializer), createUserController)
userRoutes.get("", ensureAuthMiddleware, listUsersController)
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController)
userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController)

export default userRoutes