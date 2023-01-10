import "reflect-metadata"
import express from "express"
import "express-async-errors"
import { handleError } from "./errors/handleErrors"
import sessionRoutes from "./routes/session.routes"
import userRoutes from "./routes/users.routes"

const app = express()

app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", sessionRoutes)

app.use(handleError)

export default app 