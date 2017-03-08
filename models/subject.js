const mongoose = require('mongoose');

const Schema = mongoose.Schema;


var subjectSchema = new Schema({
	title: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true
	},
	duration: {
		type: String,
		required: true,
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

var Subject = mongoose.model('Subject', subjectSchema);

module.exports = {Subject};