import { Note } from "../../types";

interface NoteFields {
    content: unknown,
    created: unknown
}

const toNewNote = ({ content, created }: NoteFields): Note => {
    return {
        content: parseContent(content),
        created: parseDate(created)
    };
};

const parseContent = (value: unknown): string => {
    if (!value || !isString(value)) {
        throw new Error('Invalid or missing content');
    }
    return value;
};

// const parseDate = (value: unknown): string => {
//     if (!value || !isDate(value)) {
//         throw new Error('Invalid or missing date');
//     }

//     return `${value.getDate()}/${value.getMonth()}/${value.getFullYear()}, 
//         ${value.getHours()}:${value.getMinutes()}:${value.getMilliseconds()}`;
// };

const parseDate = (value: unknown): string => {
    console.log(`parseDate value=${value}`);
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