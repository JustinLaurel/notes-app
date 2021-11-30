import dotenv from 'dotenv';
dotenv.config();
import database from './src/controllers/database';
import notesRouter from './src/controllers/notes';
import usersRouter from './src/controllers/users';
import loginRouter from './src/controllers/login';
import padRouter from './src/controllers/pad';

import express from 'express';
import cors from 'cors';
import path from 'path';

const databaseUri = process.env.DB_URI;
if (!databaseUri) throw new Error(
    `process.env.DB_URI is undefined. Please see '.env.example' file`);
void database.connect(databaseUri);

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('build'));

app.use('/api/notes', notesRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/pad', padRouter);
app.get('/*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend listening to port ${PORT}`);
});