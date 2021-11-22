/* eslint-disable @typescript-eslint/no-unsafe-call */
import mongoose, { Schema } from 'mongoose';
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
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    position: {
        type: String,
        required: true
    }
});
noteSchema.plugin(uniqueValidator);

noteSchema.set('toJSON', {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform: (_document: any, returnedObject: { _id: Schema.Types.ObjectId | string, __v: any, user: Schema.Types.ObjectId | string, position: string | number}) => {
        returnedObject._id = returnedObject._id.toString();
        returnedObject.user = returnedObject.user.toString();
        delete returnedObject.__v;
    }
});

const Note = mongoose.model('Note', noteSchema);

export default Note;