const express = require('express');
const controller = require('./controller.js');

const router = new express.Router();

router.get('/', controller.list);
router.post('/', controller.create);

module.exports = router;