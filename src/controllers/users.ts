import express from 'express';
import UserModel from '../models/user';
import PadModel from '../models/pad';
const router = express.Router();
import { createNewUser, parseUser, parseUserForToken } from '../validators/users';
import parsers from '../validators/parsers';
import jwt from 'jsonwebtoken';
import { parsePad } from '../validators/pad';
import usersService from '../services/usersService';

router.get('/:username', async (req, res) => {
    try {
        const username = (req.params.username).toLowerCase();
        const usernameExists = await UserModel.exists({username: username});

        res.status(200).send(!usernameExists);
    } catch(e) {
        res.status(400).send((e as Error).message);
    }
});

router.post('/', async (req, res) => {
    try {
        const userToSave = await createNewUser(req.body);
        const userDocument = new UserModel({...userToSave});
        const userResult = await userDocument.save();

        const user = parseUser(userResult);

        const padDocument = new PadModel({ content: 'Type here to start!', user: user._id });
        const padResult = await padDocument.save();
        console.log(`hi`);
        console.log(`hi2`);
        const pad = parsePad(padResult);

        await usersService.updateUserPad(user._id, pad);

        const userForToken = parseUserForToken(user);

        const SECRET = parsers.parseString(
            process.env.SECRET,
            'Authentication error, process.env.SECRET is not a valid string'
        );
        const token = jwt.sign(userForToken, SECRET);

        res.status(200).send({
            token,
            username: user.username,
            name: user.name,
        });
    } catch(e) {
        res.status(401).send((e as Error).message);
    }
});


export default router;