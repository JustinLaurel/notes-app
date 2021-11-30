import { Pad } from "../types";

export const isPad = (value: unknown): value is Pad => {
    const test = value as Pad;
    if ('content' in test && typeof test.content === 'string'
        && 'user' in test && '_id' in test) return true;
    else return false;
};

export const parsePad = (value: unknown) => {
    if (isPad(value)) {
        return value;
    } else throw new Error(`Value from DB is not a valid Pad object`);
};

export const parseContent = (value: unknown) => {
    if (typeof value === 'string') {
        return value;
    }
    else throw new Error(`Pad content value from Frontend is not a valid string`);
};