const express = require('express');
import { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
    console.log('http://localhost:3000');
});