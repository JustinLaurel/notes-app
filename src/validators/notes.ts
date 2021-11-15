import { NewNote } from "../types";
import parsers from './parsers';

const parseNote = ({ content, created }: NewNote): NewNote => {
    return {
        content: parsers.parseString(content),
        created: parsers.parseDate(created)
    };
};

export default parseNote;