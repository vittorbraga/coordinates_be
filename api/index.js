const express = require('express');
const coordinates = require('./coordinates');

const router = new express.Router();

router.use('/coordinates', coordinates);

module.exports = router;