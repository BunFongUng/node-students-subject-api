const _ = require('lodash');

const {ObjectID} = require('mongodb');

const {Subject} = require('../models/subject');

module.exports = {
	createSubject: (req, res) => {
		let body = _.pick(req.body, ['title', 'duration']);

		let subject = new Subject(body);

		subject.save().then((subject) => {
			res.send({
				status: 'success',
				data: subject
			});
		}).catch((err) => {
			res.send({
				status: 'error',
				message: 'Unable to save subject.'
			});
		});
	}
};

