import User from '../models/user';
import NoteModel from '../models/note';
import { parseUser } from '../validators/users';
import { NewNote, NoteIdPosition, Note } from '../types';
import mongoose from 'mongoose';
import { BulkOperation } from '../types';

const get = async (userId: string) => {
    const result = await User.findById(userId).populate({
        path: "notes",
        options: {
            sort: { "position": 1 },
            collation: {
                locale: "en_US",
                numericOrdering: true
            }
        }
    });
    // .collation({
    //     locale: "en_US",
    //     numericOrdering: true,
    // });
    const user = parseUser(result);

    if (user) {
        return user.notes;
    }
    return null;
};

const updateContent = async (note: Note) => {
    const updated = await NoteModel.updateOne(
        { _id: note._id },
        { content: note.content },
        { new: true }
    );
    return updated;
};

const getBulkUpdateArray = (notes: NoteIdPosition[]) => {
    const bulkArr = [];

    for (const note of notes) {
        bulkArr.push({
            updateOne: {
                "filter": { "_id": mongoose.Types.ObjectId(note._id) },
                "update": { $set: { "position": note.position }}
            }
        });
    }
    return bulkArr as BulkOperation;
};
const updatePosition = async (notes: NoteIdPosition[]) => {
    const operations = getBulkUpdateArray(notes);
    const result = await NoteModel.collection.bulkWrite(operations);
    return result;
};

const removeAndUpdatePositions = async (noteId: string, notes: NoteIdPosition[]) => {
    const operations = getBulkUpdateArray(notes);
    operations.push({
        deleteOne: {
            "filter": { "_id": mongoose.Types.ObjectId(noteId) },
        } 
    });

    const deleted = await NoteModel.collection.bulkWrite(operations);
    return deleted;
};

const add = async (newNote: NewNote, userId: string) => {
    const noteWithUser = new NoteModel({
        ...newNote,
        user: userId,
    });

    const result = await noteWithUser.save();
    return result;
};

const addIdToUser = async (userId: string, noteId: string) => {
    return await User.findByIdAndUpdate(
        userId,
        {$push: {"notes": noteId}},
        {new: true}
    );
};

export default {
    get,
    removeAndUpdatePositions,
    add,
    addIdToUser,
    updatePosition,
    updateContent
};