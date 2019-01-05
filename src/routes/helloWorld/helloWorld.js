const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(['awh hell ya']);
});

module.exports = router;