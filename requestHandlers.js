var querystring = require("querystring"),
		fs = require("fs"),
		sys = require("sys"),
		formidable = require("formidable");

function start(response) {
	console.log("Request handler 'start' was called");
	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" ' +
		'content="text/html; charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" '+
		'<method="post">'+
		'<input type="file" name="upload" multiple="multiple">'+
		'<input type="submit" value="Upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';
	response.writeHead( 200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}
function upload(response, request) {
	console.log("Request handler 'upload' was called.");
	
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files) {
		if(error) { console.log(error);}
		console.log("Parsing done");
		sys.inspect({files: files});
		console.log(files.upload.path);
		fs.rename(files.upload.path, "/tmp/test.png");
		
		response.writeHead(200, {"Context-Type": "text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
}
function show(response) {
	console.log("Request handle 'show' was called.");
	response.writeHead(200, {"Context-Type": "image/png"});
	fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload
exports.show = show;;
