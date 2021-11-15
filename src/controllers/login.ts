import express from 'express';
import { toCredentials } from '../validators/login';
import bcrypt from 'bcrypt';
import parser from '../validators/parsers';
import UserModel from '../models/user';
import jwt from 'jsonwebtoken';
import { parseUser } from '../validators/users';
import { UserForToken } from '../types';

const router = express.Router();

router.post('/', async (req, res) => {
    try { //Write error handling middleware later, using next() to throw errors
        const { username, password } = toCredentials(req.body);
        const query = await UserModel.findOne({ username });
        const user = parseUser(query);
    
        const passwordCorrect = user
            ? await bcrypt.compare(password, user.passwordHash)
            : false;
    
        if (passwordCorrect && user) {
            const userForToken = {
                _id: user._id,
                username: user.username
            } as UserForToken;

            const SECRET = parser.parseString(
                process.env.SECRET,
                'Authentication error, process.env.SECRET is not a valid string'
            );
            const token = jwt.sign(userForToken, SECRET);
    
            res.status(200).send({
                token,
                username,
                name: user.name
            });
        } else 
            throw new Error();
    } catch(e) {
        res.statusMessage = `Invalid username or password`;
        res.status(401).send({error: `Invalid username or password`});
    }
});

export default router;