const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send('API is running');
});

const port = process.env.PORT || 5000;

app.listen(port, console.log('Server running on port ${port}'));