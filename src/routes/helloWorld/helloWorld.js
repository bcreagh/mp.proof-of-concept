const express = require('express');
const GetResponse = require('../../domain/httpResponses/getResponse');
const PostResponse = require('../../domain/httpResponses/postResponse');

const router = express.Router();

router.get('/', (req, res) => {
    const result = new GetResponse();
    result.readme = '# Hello world \n This is the hello world route!';
    res.json(result);
});

router.post('/', (req, res) => {
    const input = req.body.input;
    console.log(input);
    console.log(req);
    const result = new PostResponse();
    result.input = input;
    result.output = `Hello ${input}`;
    res.json(result);
});

module.exports = router;