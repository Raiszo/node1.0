
var empty_object = {};

var stooge = {
	"first-name": "Je",			 // not a legal name because of the '-'
	"last-name": "Howlet",
};

var flight = {
 	airline: "Oceanic",
 	number: 815,
 	departure: {
 		IATA: "SYD",
 		time: "2004-09-22 14:55",
 		city: "Sydney"
 	},
 	arrival: {
 		IATA: "LAX",
 		time: "2004-09-23 10:42",
	}
};


stooge['middle-name'] = 'Lester';

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;

// this is a way to get a new object
// any change in the new object wont touch the prototype, like: changing a property or adding another one
if (typeof Object.create !== 'function' ) {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);

console.log(another_stooge.nickname);

another_stooge.nickname = 'Moe';
console.log(another_stooge.nickname);
console.log(stooge.nickname);

another_stooge.profession = 'actor'
console.log(stooge.profession);

var name;
for (name in another_stooge) {
	if(typeof another_stooge[name] !== 'function') {
		console.log(name + ': ' + another_stooge[name]);
	}
}

delete another_stooge.nickname

console.log(another_stooge.nickname)	// back again is 'Curty' as the nickname property form the prototype
