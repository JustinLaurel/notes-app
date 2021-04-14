import express from 'express';
import User from '../models/user';
const router = express.Router();
import { toUser } from '../validators/users';

router.post('/', async (req, res) => {
    try {
        const user = toUser(req.body);
        const userDocument = new User({...user});
        const savedUser = await userDocument.save();
        res.status(200).send(savedUser);
    } catch(e) {
        res.status(401).send(`Invalid username or password`);
    }
});

export default router;