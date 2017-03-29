var express = require("express");
var app = express();

app.get('/', function(req,res) {
	res.send('Hello :D');
});
app.get('/users/:userID/books/:bookID', function (req,res) {
	res.send(req.params);
});
app.listen(3000, function () {
	console.log('Port 1234 !!!');
});
