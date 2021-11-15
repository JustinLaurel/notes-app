import bcrypt from 'bcrypt';

const isString = (value: unknown): value is string => {
    return typeof value === 'string'; 
};

const parseAndHashPassword = async (value: unknown): Promise<string> => {
    const password = parseString(value, 'null or not a valid string');

    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    if (!passwordHash) {
        throw new Error(`Failed password hashing`);
    }
    return passwordHash;
};

const parseString = (value: unknown, errorMessage?: string): string => {
    if (!value || !isString(value)) {
        if (errorMessage) throw new Error(`Error: ${errorMessage}`);
        else throw new Error(`parseString error: ${JSON.stringify(value)} is not a string`);
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
    isString,
    parseString,
    parseDate,
    isDate,
    parseAndHashPassword,
};