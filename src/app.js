const express = require('express');
const helloWorld = require('./routes/helloWorld/helloWorld');

const app = express();
const port = 3000;

app.use('/poc/hello-world', helloWorld);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});