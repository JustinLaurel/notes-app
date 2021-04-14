import utils from './parsers';
import { User, NewUser } from '../types';

export const toUser = async ({ username, password, name }: NewUser): Promise<User> => {
    return {
        username: utils.parseString(username),
        passwordHash: await utils.parseAndHashPassword(password),
        name: utils.parseString(name)
    };
};