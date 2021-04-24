const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.get('/api/test', function(req, res) {
    const success = {
        "login": "successful",
    }


    res.status(200).json(success);
});

const port = 3000;

app.listen(port, () => console.log(`App running at http://localhost:${port}`));