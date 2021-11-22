import { NewNote } from "../types";
import parsers from './parsers';
import { NoteIdPosition } from '../types';

export const parseNote = ({ content, created, position }: NewNote): NewNote => {
    return {
        content: parsers.parseString(content),
        created: parsers.parseDate(created),
        position
    };
};

// export const parseNoteIdPosition = (value: unknown) => {
//     if (isNoteIdPosition(value)) {
//         return isNoteIdPosition;
//     } else throw new Error(`Invalid noteIdPosition: ${JSON.stringify(value)}`);
// };

export const isNoteIdPositionArray = (value: unknown): value is NoteIdPosition => {
    return Array.isArray(value) && value.every(isNoteIdPosition);
};

const isNoteIdPosition = (value: unknown): value is NoteIdPosition => {
    if (value) {
        const note = value as NoteIdPosition;
        if ('_id' in note && typeof note._id === 'string'
            && 'position' in note && typeof note.position === 'string')
            return true;
    }

    return false;
};

export const parseNoteIdPosition = (value: unknown): NoteIdPosition[] => {
    if (value && Array.isArray(value) && value.every(isNoteIdPosition)) return value;
    else throw new Error(`Value given is not a NoteIdPosition: ${JSON.stringify(value)}`);
};

// export const decodeToken = (value: unknown): string | null => {
//     const token = parsers.parseString(value, 'Token is not a string');
//     const SECRET = parsers.parseString(process.env.SECRET, 'Invalid SECRET env variable');

//     const decoded = jwt.verify(token, SECRET);

//     if (isDecodedToken(decoded)) return decoded._id;
//     else return null;
// };