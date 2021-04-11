import Note from '../models/note';

const getAll = async () => {
    const notes = await Note.find({});
    console.log(`getAll notes=${notes}`);
    return notes;
};

export default {
    getAll,
};