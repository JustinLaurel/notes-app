import express from 'express';
import padService from '../services/padService';
import { decodeToken } from '../validators/login';
import { parseContent } from '../validators/pad';

const router = express.Router();

router.get('/', async (req, res) => {
    let pad;
    try {
        const token = req.headers.authorization;
        const userId = decodeToken(token) as string;
        
        if (userId) {
            pad = await padService.get(userId);
        }

        pad
            ? res.status(200).send(pad)
            : res.status(400).send(`Pad could not be found`);
    } catch(e) {
        res.status(404).send(`Unauthorized: ${(e as Error).message}`);
    }
});

router.put('/', async (req, res) => {
    try {
        const token = req.headers.authorization;
        const userId = decodeToken(token) as string;

        const updatedContent = parseContent(req.body.content);

        if (!userId) throw new Error(`Invalid user token`);

        const savedPad = await padService.update(updatedContent, userId);
        
        res.status(200).send(savedPad);
    } catch(e) {
        res.status(404).send((e as Error).message);
    }
});

export default router;