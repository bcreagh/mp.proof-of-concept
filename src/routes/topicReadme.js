const express = require('express');
const Readme = require('../domain/httpResponses/readme');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    const readme = new Readme();
    readme.data = fs.readFileSync('./README.md', 'utf8');
    res.json(readme);
});

module.exports = router;