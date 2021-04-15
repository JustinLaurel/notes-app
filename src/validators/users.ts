import parser from './parsers';
import { NewUserHashed, NewUser, User } from '../types';

export const parseAndHashNewUser = async ({ username, password, name }: NewUser): Promise<NewUserHashed> => {
    return {
        username: parser.parseString(username.toLowerCase()), //All usernames are case-insensitive
        passwordHash: await parser.parseAndHashPassword(password),
        name: parser.parseString(name)
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseUser = (object: any): User => {
    return {
        _id: parser.parseString(object._id),
        username: parser.parseString(object.username),
        passwordHash: parser.parseString(object.passwordHash),
        name: parser.parseString(object.name)
    };
};