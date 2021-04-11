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
    transform: (_document: any, returnedObject: { __v: any; }) => {
        delete returnedObject.__v;
    }
});

const Note = mongoose.model('Note', noteSchema);

export default Note;