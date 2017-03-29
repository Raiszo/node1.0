var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log('showing Valeera');
	res.sendfile("/tmp/test.png");
});

module.exports = router;
