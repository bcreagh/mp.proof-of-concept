const express = require('express');
const cors = require('cors');

const helloWorld = require('./routes/helloWorld/helloWorld');
const listRoutes = require('./routes/listRoutes/listRoutes');
const topicReadme = require('./routes/topicReadme/topicReadme');
const ConfigService = require('./services/configService');

ConfigService.init();
const app = express();
const port = ConfigService.getPort();

app.use(express.json());
app.use(cors());

app.use('/poc/hello-world', helloWorld);
app.use('/poc/routes', listRoutes);
app.use('/poc/readme', topicReadme);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});