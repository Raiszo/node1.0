var Quo = function(string) {
	this.status = string;
};
Quo.prototype.get_status = function () {
	return this.status;
};

var myQuo = new Quo("pere");
console.log(myQuo.get_status());

var array = [3, 4];
var add = function (a,b) { 
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add needs numbers'
		};
	}
	return a+b;
};

var tryIt = function() {
	try {
		add('seven');
	} catch (e) {
		console.log(e.name + ': ' + e.message)
	}
}
tryIt();


var sum = add.apply(null,array);

var statusObject = {
	status: 'A Ok'
};

var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);
