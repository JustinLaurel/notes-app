export interface Note {
    _id: string,
    content: string,
    created: string
}

export interface NewNote {
    content: string,
    created: string
}

interface UserBase {
    username: string
}
interface HashedUserBase extends UserBase {
    passwordHash: string
}

export interface NewUser extends UserBase {
    password: string,
    name: string
}

export interface NewUserHashed extends HashedUserBase {
    name: string
}

export interface User extends HashedUserBase {
    _id: string,
    name: string
}

export interface Credentials extends UserBase {
    password: string
}