require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    res.send({
        token: 'test123'  
    })
});

app.listen(process.env.PORT, () => {
    console.log(`API is running on http://localhost:${process.env.PORT}`)
});