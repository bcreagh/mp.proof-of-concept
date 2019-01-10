const express = require('express');
const fs = require('fs');

const GetResponse = require('../../domain/httpResponses/getResponse');
const PostResponse = require('../../domain/httpResponses/postResponse');
const InputTypes = require('../../domain/httpResponses/requestDetails/inputTypes');
const Stopwatch = require('../../commonUtilities/stopwatch');
const Logger = require('../../commonUtilities/logger/logger');
const examples = require('./examples.json');

const router = express.Router();

router.get('/', (req, res) => {
    Logger.log('Handling the GET request');
    const result = new GetResponse();
    result.requestDetails.inputType = InputTypes.TEXT;
    result.examples = examples;
    const readme = fs.readFileSync('./src/routes/helloWorld/helloWorld.md', 'utf8');
    result.readme = readme;
    res.json(result);
});

router.post('/', (req, res) => {
    const result = new PostResponse();
    const stopwatch = new Stopwatch();
    const input = req.body.input;

    Logger.log('Handling the POST request', result);
    stopwatch.start();
    result.input = input;
    result.output = `Hello ${input}`;
    const performance = stopwatch.stop();
    result.performance = performance;
    res.json(result);
});

router.post('/with-route', (req, res) => {
    const result = new PostResponse();
    const stopwatch = new Stopwatch();
    const input = `, this response is from the 'with-route' route!`;

    Logger.log('Handling the POST request', result);
    stopwatch.start();
    result.input = input;
    result.output = `Hello ${input}`;
    const performance = stopwatch.stop();
    result.performance = performance;
    res.json(result);
});

module.exports = router;