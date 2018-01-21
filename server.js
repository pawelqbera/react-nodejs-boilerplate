const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/client/build')));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', function(res, req) {
	res.sendFile(__dirname + '/client/build/index.html');
});

app.listen(PORT, error => (
	error
		? console.error(error)
		: console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));

app.get('/api/name', function (req, res) {
	console.log('sending name');
	res.send({ name: 'Pawel' });
	res.end();
});
