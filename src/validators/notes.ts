import { NewNote, Note } from "../types";
import parsers from './parsers';
import { NoteIdPosition } from '../types';

export const isNote = (value: unknown): value is Note => {
    const note = value as Note;
    return (
        Boolean(note.content) && parsers.isString(note.content)
        && Boolean(note.created) && parsers.isString(note.created)
        && Boolean(note.position) && parsers.isString(note.position)
        && Boolean(note._id) && parsers.isString(note._id)
        && Boolean(note.user) && parsers.isString(note.user)
    );
};

export const parseNewNote = ({ content, created, position }: NewNote): NewNote => {
    return {
        content: parsers.parseString(content),
        created: parsers.parseDate(created),
        position
    };
};

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