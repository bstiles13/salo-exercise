const express = require('express');
const router = new express.Router();
const apiController = require('../controllers/apiController.js');

router.get('/emails', apiController.getEmails);

module.exports = router;
