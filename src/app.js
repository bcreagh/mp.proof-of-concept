const express = require('express');

const helloWorld = require('./routes/helloWorld/helloWorld');
const listRoutes = require('./routes/listRoutes/listRoutes');
const ConfigService = require('./services/configService');

ConfigService.init();
const app = express();
const port = ConfigService.getPort();

app.use(express.json());

app.use('/poc/hello-world', helloWorld);
app.use('/poc/routes', listRoutes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});