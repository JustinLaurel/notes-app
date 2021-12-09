import mongoose from 'mongoose';

export interface NewNote {
    content: string,
    created: string,
    position: string
}

export interface Note extends NewNote {
    _id: string,
    user: string,
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

export interface NoteIdPosition {
    _id: string,
    position: string
}

export interface Pad {
    _id: string,
    content: string,
    user: string,
}

interface UpdateOperation {
    updateOne: {
        filter: {
            _id: mongoose.Types.ObjectId;
        };
        update: {
            $set: {
                position: string;
            };
        };
    }
}
interface DeleteOperation {
    deleteOne: {
        filter: {
            _id: mongoose.Types.ObjectId;
        }
    }
}
export type BulkOperation = (UpdateOperation | DeleteOperation)[];