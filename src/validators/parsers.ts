import bcrypt from 'bcrypt';
import { User } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isUser = (value: any): value is User => {
    return isString(value.username)
        && isString(value.name)
        && isString(value.passwordHash);
};

const isString = (value: unknown): value is string => {
    return typeof value === 'string'; 
};

const parseAndHashPassword = async (value: unknown): Promise<string> => {
    const password = parseString(value);

    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    if (!passwordHash) {
        throw new Error(`Failed password hashing`);
    }
    return passwordHash;
};

const parseString = (value: unknown): string => {
    if (!value || !isString(value)) {
        throw new Error(`Invalid or missing string: ${JSON.stringify(value)}`);
    }
    return value;
};

const parseDate = (value: unknown): string => {
    if (!value || !isString(value) || !isDate(value)) {
        throw new Error('Invalid or missing date');
    }
    return value;
};

const isDate = (value: string): boolean => {
    return Boolean(Date.parse(value));
};

export default {
    isUser,
    isString,
    parseString,
    parseDate,
    isDate,
    parseAndHashPassword
};