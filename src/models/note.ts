/* eslint-disable @typescript-eslint/no-unsafe-call */
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: String,
        required: true
    }
});
noteSchema.plugin(uniqueValidator);

noteSchema.set('toJSON', {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform: (_document: any, returnedObject: { _id: any, __v: any; }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        returnedObject._id = returnedObject._id.toString();
        delete returnedObject.__v;
    }
});

const Note = mongoose.model('Note', noteSchema);

export default Note;