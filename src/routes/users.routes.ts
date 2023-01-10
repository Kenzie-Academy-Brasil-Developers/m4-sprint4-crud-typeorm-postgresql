import { Router } from "express";
import { createUserController,listUsersController, updateUserController, softDeleteUserController } from "../controllers"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { ensureEmailAvailabilityMiddleware } from "../middlewares/ensureEmailAvailability.middlewares";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middlewares"
import { createUserSerializer, updateUserSerializer } from "../serializers/user.serializers";
import { verifyUserIsAdmMiddleware } from "../middlewares/verifyUserIsAdm.middleware";
import { verifyUserExistsMiddleware } from "../middlewares/verifyUserExists.middleware";
import { forbbidenUpdateDataMiddleware } from "../middlewares/forbbidenUpdateData.middlewares";

const userRoutes = Router()

userRoutes.post("", ensureDataIsValidMiddleware(createUserSerializer), ensureEmailAvailabilityMiddleware, createUserController)
userRoutes.get("", ensureAuthMiddleware, verifyUserIsAdmMiddleware, listUsersController)
userRoutes.patch("/:id", ensureAuthMiddleware, verifyUserIsAdmMiddleware, verifyUserExistsMiddleware, forbbidenUpdateDataMiddleware, ensureDataIsValidMiddleware(updateUserSerializer), ensureEmailAvailabilityMiddleware, updateUserController)
userRoutes.delete("/:id", ensureAuthMiddleware, verifyUserIsAdmMiddleware, verifyUserExistsMiddleware, softDeleteUserController)

export default userRoutes 