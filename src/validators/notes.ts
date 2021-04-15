import { NewNote } from "../types";

const parseNote = ({ content, created }: NewNote): NewNote => {
    return {
        content: parseString(content),
        created: parseDate(created)
    };
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

const isString = (value: unknown): value is string => {
    return typeof value === 'string' || value instanceof String;
};

const isDate = (value: string): boolean => {
    return Boolean(Date.parse(value));
};

export default parseNote;