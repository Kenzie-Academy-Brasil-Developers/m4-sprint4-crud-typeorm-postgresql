import { Router } from "express";
import { createSessionController } from "../controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { createSessionSerializer } from "../serializers/user.serializers";

const sessionRoutes = Router ()

sessionRoutes.post("", ensureDataIsValidMiddleware(createSessionSerializer), createSessionController)

export default sessionRoutes   