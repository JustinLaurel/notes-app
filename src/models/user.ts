/* eslint-disable @typescript-eslint/no-unsafe-call */
import mongoose from 'mongoose';

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
        minLength: 6
    },
});

userSchema.set('toJSON', {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform: (_document: any, returnedObject: { _id: any, __v: any; }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        returnedObject._id = returnedObject._id.toString();
        delete returnedObject.__v;
    }
});

const User = mongoose.model('User', userSchema);

export default User;