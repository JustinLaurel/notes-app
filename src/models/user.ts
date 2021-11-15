/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minLength: 6,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    name: {
        type: String,
        minLength: 6,
        required: true
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note',
        required: true
    }]
});

userSchema.set('toJSON', {
    transform: (_document: any, returnedObject: { _id: Schema.Types.ObjectId | string, __v: any, notes: Schema.Types.ObjectId[] | string[]}) => {
        returnedObject._id = returnedObject._id.toString();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        returnedObject.notes = returnedObject.notes.map(((noteId: any) => JSON.stringify(noteId)));
        delete returnedObject.__v;
    }
});

const User = mongoose.model('User', userSchema);

export default User;