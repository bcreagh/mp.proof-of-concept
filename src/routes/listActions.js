const express = require('express');

const ConfigService = require('../services/configService');

const router = express.Router();

router.get('/', (req, res) => {
    const actions = ConfigService.getActions();
    res.json(actions);
});

module.exports = router;