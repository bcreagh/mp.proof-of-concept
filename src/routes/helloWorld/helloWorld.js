const express = require('express');
const fs = require('fs');

const GetResponse = require('../../domain/httpResponses/getResponse');
const PostResponse = require('../../domain/httpResponses/postResponse');
const Stopwatch = require('../../commonUtilities/stopwatch');

const router = express.Router();

router.get('/', (req, res) => {
    const result = new GetResponse();
    const readme = fs.readFileSync('./src/routes/helloWorld/helloWorld.md', 'utf8');
    // result.readme = '# Hello world \n This is the hello world route!';
    result.readme = readme;
    res.json(result);
});

router.post('/', (req, res) => {
    const stopwatch = new Stopwatch();
    stopwatch.start();
    const input = req.body.input;
    const result = new PostResponse();
    result.input = input;
    result.output = `Hello ${input}`;
    const performance = stopwatch.stop();
    result.performance = performance;
    res.json(result);
});

module.exports = router;