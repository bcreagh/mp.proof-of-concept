const express = require('express');
const fs = require('fs');

const ConfigService = require('../../services/configService');

const router = express.Router();

router.get('/', (req, res) => {
    const routes = ConfigService.getRoutes();
    res.json(routes);
});

module.exports = router;