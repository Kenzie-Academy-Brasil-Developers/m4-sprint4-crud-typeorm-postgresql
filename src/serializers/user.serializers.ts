import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserRequest, IUser } from "../interfaces/users/users.interfaces"

const createUserSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

const newUserSerializer: SchemaOf<IUser> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    isAdm: yup.boolean(),
    isActive: yup.boolean(),
    id: yup.string().required(),
    createdAt: yup.date(),
    updatedAt: yup.date()
})

export { createUserSerializer, newUserSerializer }