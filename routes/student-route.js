const express = require('express');
const router = express.Router();
const StudentsController = require('../controllers/StudentsController');

router.get('/', StudentsController.index);

module.exports = router;

