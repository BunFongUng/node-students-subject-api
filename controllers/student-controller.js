const _ = require('lodash');
const { ObjectID } = require('mongodb');

const { Student } = require('../models/student');

module.exports = {
	// get students list
	getStudentList: (req, res) => {
		Student.find().then((students) => {
			res.send({
				status: 'success',
				data: students
			});
		}).catch((err) => {
			res.status(400).send({
				status: 'error',
				message: err
			});
		});
	},
	// create new students
	createStudent: (req, res) => {
		let body = _.pick(req.body, ['firstName', 'lastName', 'gender', 'dateOfBirth', 'phoneNumber', 'email']);
		let student = new Student(body);

		student.save().then((student) => {
			res.send({
				status: 'success',
				data: student
			});
		}).catch((err) => {
			res.status(400).send({
				status: 'error',
				message: err
			});
		});
	},
	getStudentById: (req, res) => {
		let id = req.params.id;

		if(!ObjectID.isValid(id)) {
			return res.status(400).send({
				status: 'error',
				message: 'Invalid student id.'
			});
		} 

		Student.findById(id).then((student) => {
			if(!student) {
				return res.status(404).send({
					status: 'error',
					message: 'Student not found!'
				});
			}

			res.send({
					status: 'success',
					data: student
				});
		}).catch((err) => {
			res.status(400).send({
				status: 'error',
				message: 'Unable to fetch student by id.'
			});
		});

	},
	deleteStudentById: (req, res) => {
		let id = req.params.id;

		if(!ObjectID.isValid(id)) {
			return res.status(400).send({
				status: 'error',
				message: 'Invalid student id.'
			});
		}

		Student.findByIdAndRemove(id).then((student) => {
			if(!student) {
				return res.status(404).send({
					status: 'error',
					message: 'Student not found!'
				});
			}

			res.send({
				status: 'success',
				data: student
			});
		}).catch((err) => {
			res.status(400).send({
				status: 'error',
				message: `Unable to delete student by id, ${err}`
			});
		});
	}

};