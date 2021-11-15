export interface Note {
    _id: string,
    content: string,
    created: string,
    user: string,
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

export interface SignupData extends UserBase {
    password: string,
    name: string,
}

export interface NewUserHashed extends HashedUserBase {
    name: string,
    notes: string[]
}

export interface User extends HashedUserBase {
    _id: string,
    name: string,
    notes: string[]
}

export interface UserForToken {
    _id: string,
    username: string
}

export interface Credentials extends UserBase {
    password: string
}

export interface DecodedToken {
    _id: string
}