import parser from './parsers';
import { NewUserHashed, SignupData, User, UserForToken } from '../types';

export const createNewUser = async ({ username, password, name }: SignupData): Promise<NewUserHashed> => {
    const errorMsg = 'Invalid username or name';
    return {
        username: parser.parseString(username.toLowerCase(), errorMsg), //All usernames are case-insensitive
        passwordHash: await parser.parseAndHashPassword(password),
        name: parser.parseString(name, errorMsg),
        notes: [],
    };
};

export const parseUser = (object: unknown): User => {
    if (!isUser(object)) throw new Error(`Cannot find user associated with user ID from request token`);
    return {
        _id: object._id,
        username: object.username,
        passwordHash: object.passwordHash,
        name: object.name,
        notes: object.notes,
    };
};

export const parseUserForToken = (user: unknown): UserForToken => {
    if (!isUser(user)) throw new Error(`Signed up user returned from database is not valid`); 
    return {
        _id: user._id,
        username: user.username,
    };
};

const isUser = (value: unknown): value is User => {
    if (value && typeof value === 'object') {
        if ('username' in value 
        && '_id' in value
        && 'name' in value
        && 'passwordHash' in value 
        && 'notes' in value
        && Array.isArray((value as User).notes)) {
            return true;
        }
    }
    return false;
};