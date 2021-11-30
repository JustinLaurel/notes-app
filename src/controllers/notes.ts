import express from 'express';
const router = express.Router();
import notesService from '../services/notesService';
import { isNoteIdPositionArray, parseNoteIdPosition, parseNewNote, isNote } from '../validators/notes';
import { decodeToken } from '../validators/login';
import { NewNote, Note, NoteIdPosition } from '../types';
import User from '../models/user';

router.get('/', async (req, res) => {
    let allNotes;
    try {
        const token = req.headers.authorization;
        const userId = decodeToken(token) as string;
        allNotes = await notesService.get(userId);
        allNotes
            ? res.status(200).send(allNotes)
            : res.status(400).send(`Notes could not be found`);
    } catch(e) {
        res.status(404).send(`Unauthorized: ${(e as Error).message}`);
    }

});

router.post('/', async (req, res) => {
    try {
        const newNote: NewNote = parseNewNote(req.body.note);
        const userId = decodeToken(req.body.token);
        if (!userId) throw new Error(`Invalid user token`);

        const savedNote = await notesService.add(newNote, userId);

        await notesService.addIdToUser(userId, savedNote._id);

        res.status(200).send(savedNote);
    } catch(e) {
        res.status(404).send((e as Error).message);
    }
});

router.put('/position', async (req, res) => {
    try {
        if (isNoteIdPositionArray(req.body)) {
            const notes = req.body as unknown as NoteIdPosition[];
            const updated = await notesService.updatePosition(notes);
            return updated;
        }
        else throw new Error(`Data from frontend is not a NoteIdPosition array: ${JSON.stringify(req.body)}`);
    } catch(e) {
        res.status(404).send(`Error updating note: ${(e as Error).message}`);
    }
});

const removeNoteIdFromUser = async (userId: string, noteId: string) => {
    return await User.findByIdAndUpdate(
        userId,
        {$pullAll: {"notes": [noteId]}},
        {new: true}
    );
};

router.put('/content', async (req, res) => {
    try {
        const toUpdate = req.body as Note;
        if (!isNote(toUpdate)) throw new Error(`Invalid note from frontend in req.body`);

        await notesService.updateContent(toUpdate);
    } catch(e) {
        res.status(401).send((e as Error).message);
        console.error(`Error in router.put/content: ${(e as Error).message}`);
    }
});

router.delete('/:noteId', async (req, res) => {
    try {
        const noteId = req.params.noteId;
        const userId = decodeToken(req.body.token);
        if (!userId) throw new Error(`Invalid token or SECRET`);

        const notesToUpdate = parseNoteIdPosition(req.body.toUpdate);

        const deletedNote = await notesService.removeAndUpdatePositions(noteId, notesToUpdate);
        if (!deletedNote) throw new Error('Could not find note');

        await removeNoteIdFromUser(userId, noteId);

        res.status(200).send(deletedNote);
    } catch(e) {
        console.error((e as Error).message);
        res.status(400).send((e as Error).message);
    }
});

export default router;