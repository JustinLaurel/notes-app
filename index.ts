import dotenv from 'dotenv';
dotenv.config();
import database from './src/controllers/database';
import notesRouter from './src/controllers/notes';
import usersRouter from './src/controllers/users';
import loginRouter from './src/controllers/login';

import express from 'express';
import cors from 'cors';

const databaseUri = 'mongodb+srv://spring:Itinesthepl1@@spring.a47al.mongodb.net/note-app?retryWrites=true&w=majority';
void database.connect(databaseUri);

const app = express();
app.use(express.json());
app.use(cors());

app.use('/notes', notesRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend listening to port ${PORT}`);
});