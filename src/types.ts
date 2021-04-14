export interface Note {
    _id: string,
    content: string,
    created: string
}

export interface NewNote {
    content: string,
    created: string
}

export interface NewUser {
    username: string,
    password: string,
    name: string
}

export interface User {
    username: string,
    passwordHash: string,
    name: string
}