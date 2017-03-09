const express = require('express');

const router = express.Router();

const studentController = require('../controllers/student-controller');

router.get('/', studentController.getStudentList);

router.post('/', studentController.createStudent);

router.get('/:id', studentController.getStudentById);

router.delete('/:id', studentController.deleteStudentById);

router.patch('/:id', studentController.updateStudentById);

module.exports = router;