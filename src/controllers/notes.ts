import express from 'express';
const router = express.Router();
import notesService from '../services/notesService';
import Note from '../models/note';
import parseNewNote from '../validators/notes';
import { decodeToken } from '../validators/login';
import { NewNote } from '../types';
import User from '../models/user';

router.get('/', async (req, res) => {
    let allNotes;
    try {
        const token = req.headers.authorization;
        const userId = decodeToken(token);
        if (!userId) throw new Error(`Invalid token from client`);

        allNotes = await notesService.get(userId);
    } catch(e) {
        res.status(404).send(`Unauthorized: ${e.message}`);
    }

    allNotes
        ? res.status(200).send(allNotes)
        : res.status(400).send(`Notes could not be found`);
});

const addNoteIdToUser = async (userId: string, noteId: string) => {
    return await User.findByIdAndUpdate(
        userId,
        {$push: {"notes": noteId}},
        {new: true}
    );
};

router.post('/', async (req, res) => {
    try {
        const newNote: NewNote = parseNewNote(req.body.note);
        const userId = decodeToken(req.body.token);
        if (!userId) throw new Error(`Invalid user token`);

        const noteWithUser = new Note({
            ...newNote,
            user: userId
        });
        const savedNote = await noteWithUser.save();

        await addNoteIdToUser(userId, savedNote._id);

        res.status(200).send(savedNote);
    } catch(e) {
        res.status(404).send(`Error saving note: ${e.message}`);
    }
});

const removeNoteIdFromUser = async (userId: string, noteId: string) => {
    return await User.findByIdAndUpdate(
        userId,
        {$pullAll: {"notes": [noteId]}},
        {new: true}
    );
};

router.delete('/:noteId', async (req, res) => {
    try {
        const noteId = req.params.noteId;
        const userId = decodeToken(req.body.data);
        if (!userId) throw new Error(`Invalid token or SECRET`);

        const deletedNote = await notesService.remove(noteId);
        if (!deletedNote) throw new Error('Could not find note');

        await removeNoteIdFromUser(userId, noteId);

        res.status(200).send(deletedNote);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

export default router;