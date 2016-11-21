var express = require('express')
var server = express()
var ngrok = require('ngrok');

server.post('/target', function (req, res) {
  	res.send('POST request TEST')
  	console.log(req.ref);
  	console.log(res.ref);
})

server.listen(9000, function () {
	ngrok.connect(9000, function (err, url) {
		console.log(url);
		console.log('CATCH ON');
	});
	
  	
})