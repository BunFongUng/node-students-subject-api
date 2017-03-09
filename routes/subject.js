const express = require('express');

const router = express.Router();

const subjectController = require('../controllers/subject-controller');

router.post('/', subjectController.createSubject);

module.exports = router;