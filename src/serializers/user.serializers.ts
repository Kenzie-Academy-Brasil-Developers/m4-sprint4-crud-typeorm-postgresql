import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserLogin } from "../interfaces"
import { IUserRequest, IUser, IUserUpdate } from "../interfaces/users/users.interfaces"

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

const createSessionSerializer: SchemaOf<IUserLogin> = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
})

const listUsersSerializer = yup.array(newUserSerializer)

const updateUserSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    password: yup.string().notRequired(),
})

export { createUserSerializer, newUserSerializer, createSessionSerializer, listUsersSerializer, updateUserSerializer }