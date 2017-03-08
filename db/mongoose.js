const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let mongoDBURL = '';

if(process.env.NODE_ENV === 'production') {

} else {
	mongoDBURL = 'mongodb://localhost:27017/StudentsSubject';
} 

mongoose.connect(mongoDBURL);

mongoose.connection.on('connected', () => {
	console.log(`Mongoose default connection to ${mongoDBURL}`);
});

mongoose.connection.on('error', (err) => {
	console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
	console.log(`Mongoose default connection have disconnected`);
});

process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log(`Mongoose default connection disconnected through app termination`);
		process.exit(0);
	});
});

module.exports = {
	mongoose
};