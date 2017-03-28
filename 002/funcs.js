var myObject = {
	value: 1,
	increment: function (){
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

var add = function (a,b) { return a+b;};
console.log(add(3,4));

myObject.double = function () {
	var that = this;
	
	var helper = function () {
		that.value = add(that.value, that.value);
	};
	helper();
};

myObject.double();
console.log(myObject.Value);
