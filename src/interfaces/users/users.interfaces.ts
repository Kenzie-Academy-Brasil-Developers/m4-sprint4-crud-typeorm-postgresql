//1. Create User - /users - req type "post"
//Request
export interface IUserRequest {
    name: string
    email: string
    password: string
    isAdm: boolean
}

//Response
export interface IUser {
    id: string
    name: string
    email: string
    isAdm: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

//2. List All Users - /users - req type "get"

//3. Update User - /users/:id - req type "patch"
//Request
export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
}

//Response - IUser
//4. Delete User - /users/:id - req type "delete"





