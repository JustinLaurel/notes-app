import Note from '../models/note';

const getAll = async () => {
    const notes = await Note.find({});
    return notes;
};

const remove = async (id: string) => {
    const deleted = await Note.deleteOne({_id: id});
    return deleted;
};

export default {
    getAll,
    remove
};