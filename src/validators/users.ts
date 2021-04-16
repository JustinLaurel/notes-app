import parser from './parsers';
import { NewUserHashed, NewUser, User } from '../types';

export const parseAndHashNewUser = async ({ username, password, name }: NewUser): Promise<NewUserHashed> => {
    return {
        username: parser.parseString(username.toLowerCase()), //All usernames are case-insensitive
        passwordHash: await parser.parseAndHashPassword(password),
        name: parser.parseString(name)
    };
};

export const parseUser = (object: unknown): User | null => {
    if (!isUser(object)) throw new Error();
    return {
        _id: object._id,
        username: object.username,
        passwordHash: object.passwordHash,
        name: object.name
    };
};

const isUser = (value: unknown): value is User => {
    if (value && typeof value === 'object') {
        if ('username' in value && 'name' in value && 'passwordHash' in value) {
            return true;
        }
    }
    return false;
};