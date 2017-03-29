var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

router.post('/', function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(error,fields, files){
		console.log(fields.title);
		console.log(files.upload.path);
		fs.rename(files.upload.path, '/tmp/test.png');
	});
});

module.exports = router;
