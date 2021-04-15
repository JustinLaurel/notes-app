import express from 'express';
import toCredentials from '../validators/login';
import bcrypt from 'bcrypt';
import parser from '../validators/parsers';
import UserModel from '../models/user';
import jwt from 'jsonwebtoken';
import { parseUser } from '../validators/users';

const router = express.Router();

router.post('/', async (req, res) => {
    try { //Write error handling middleware later, using next() to throw errors
        const { username, password } = toCredentials(req.body);
        const query = await UserModel.findOne({ username });
        const user = parseUser(query);
    
        const passwordCorrect = user && parser.isUser(user)
            ? bcrypt.compare(password, user.passwordHash)
            : false;
    
        if (!passwordCorrect) {
            throw new Error(`Invalid username or password`);
        }

        const userForToken = {
            _id: user._id,
            username: user.username
        };
        const SECRET = parser.parseString(process.env.SECRET);
        const token = jwt.sign(userForToken, SECRET);

        res.status(200).send({
            token,
            username,
            name: user.name
        });
    } catch(e) {
        console.log(`Invalid login info in login POST router`);
        res.status(401).send(`Error: Invalid username or password`);
    }
});

export default router;