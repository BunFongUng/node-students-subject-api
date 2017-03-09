const express = require('express');

const bodyParser = require('body-parser');


// internal require

const { mongoose } = require('./db/mongoose');

const { Subject } = require('./models/subject');

const studentRouters = require('./routes/student'); 

const subjectRouters = require('./routes//subject');


const PORT = process.env.PORT || 4444;

let app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	let currentTime = new Date().toString();
	let log = `${currentTime}, ${req.method} : ${req.path}`;
	console.log(log);
	next();
});

app.get('/', (req, res) => {
	res.send({
		'message': 'welcome to our student api'
	});
});

app.use('/students', studentRouters);

app.use('/subjects', subjectRouters);


app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

