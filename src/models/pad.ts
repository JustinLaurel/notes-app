/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Schema } from 'mongoose';

const padSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

padSchema.set('toJSON', {
    transform: (_document: any, returnedObject: { _id: Schema.Types.ObjectId | string, __v: any, user: Schema.Types.ObjectId | string }) => {
        returnedObject._id = returnedObject._id.toString();
        returnedObject.user = returnedObject.user.toString();

        delete returnedObject.__v;
    }
});

const Pad = mongoose.model('Pad', padSchema);

export default Pad;