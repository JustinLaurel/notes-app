import { Credentials } from '../types';
import parsers from './parsers';
import jwt from 'jsonwebtoken';
import { DecodedToken } from '../types';

export const toCredentials = ({ username, password }: Credentials): Credentials => {
    const errorMsg = 'Invalid username or password';
    return {
        username: parsers.parseString(username.toLowerCase(), errorMsg),
        password: parsers.parseString(password, errorMsg)
    };
};

export const isDecodedToken = (obj: unknown): obj is DecodedToken => {
    if (obj && typeof obj === 'object' && '_id' in obj) {
        return parsers.isString((obj as DecodedToken)._id);
    }
    return false;
};

export const decodeToken = (value: unknown): string | null => {
    const token = parsers.parseString(value, 'Token is not a string');
    const SECRET = parsers.parseString(process.env.SECRET, 'Invalid SECRET env variable');

    const decoded = jwt.verify(token, SECRET);

    if (isDecodedToken(decoded)) return decoded._id;
    else return null;
};