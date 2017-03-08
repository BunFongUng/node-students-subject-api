const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const validator = require('validator');


// student schema 
var studentSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		minlength: 2,
		trim: true
	},
	lastName: {
		type: String,
		required: true,
		minlength: 2,
		trim: true
	},
	gender: {
		type: String,
		required: true,
		trim: true
	},
	dateOfBirth: {
		type: Date,
		required: true
	},
	phoneNumber: {
		type: String,
		required: true,
		minlength: 8
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: 'Invalid email'
		}
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}

});

var Student = mongoose.model('Student', studentSchema);

module.exports = {Student};

