import express from 'express';
import Connection from './database/db.js'
import dotenv from 'dotenv'
import defaultData from './default.js'
import Router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const SERVER_PORT = process.env.SERVER_PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const app = express();

app.use(cors({
    origin: CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);

Connection(USERNAME, PASSWORD);

app.listen(SERVER_PORT, () => console.log(`-------------->Server is running successfully on PORT ${SERVER_PORT}`));

// defaultData();