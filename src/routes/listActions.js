const express = require('express');

const ActionService = require('../services/actionService');

const router = express.Router();

router.get('/', (req, res) => {
    const actions = ActionService.getAllActions();
    res.json(actions);
});

module.exports = router;