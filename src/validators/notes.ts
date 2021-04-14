import { NewNote } from "../types";

const toNewNote = ({ content, created }: NewNote): NewNote => {
    console.log(`content=${content}`);
    console.log(`created=${created}`);
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

export default toNewNote;