import express from 'express';
const router = express.Router();
import notesService from '../services/notesService';
import Note from '../models/note';
import toNewNote from '../validators/noteValidators';

router.get('/', async (_req, res) => {
    let allNotes;
    try {
        allNotes = await notesService.getAll();
    } catch(e) {
        res.status(400).send(`Error retrieving notes: ${e.message}`);
    }

    allNotes
        ? res.status(200).send(allNotes)
        : res.status(404).send(`Notes could not be found`);
});

router.post('/', async (req, res) => {
    const newNote = toNewNote(req.body);
    const noteDocument = new Note({
        ...newNote
    });
    try {
        const savedNote = await noteDocument.save();
        res.status(200).send(savedNote);
    } catch(e) {
        res.status(400).send(`Error saving note: ${e.message}`);
    }
});

router.delete('/:noteId', async (req, res) => {
    try {
        console.log(`noteId=${req.params.noteId}`);
        const deletedNote = await notesService.remove(req.params.noteId);
        console.log(`deletedNote=${JSON.stringify(deletedNote)}`);
        if (!deletedNote) throw new Error('Could not find note');
        res.status(200).send(deletedNote);
    } catch(e) {
        res.status(400).send('Error deleting note: ' + e.message);
    }
});

export default router;