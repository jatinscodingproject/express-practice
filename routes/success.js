const express = require('express');

const router = express.Router();

const contactController = require('../controllers/constact-us')

router.get('/success',contactController.getSuccess);

module.exports = router;