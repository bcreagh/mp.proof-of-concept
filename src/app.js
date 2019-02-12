const express = require('express');
const cors = require('cors');

const helloWorld = require('./routes/actions/helloWorld/helloWorld');
const listRoutes = require('./routes/listActions');
const topicReadme = require('./routes/topicReadme');
const ConfigService = require('./services/configService');
const ActionService = require('./services/actionService');

ConfigService.init();
ActionService.init();
const app = express();
const port = ConfigService.getPort();

app.use(express.json());
app.use(cors());

app.use('/poc/hello-world', helloWorld);
app.use('/poc/actions', listRoutes);
app.use('/poc/readme', topicReadme);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});