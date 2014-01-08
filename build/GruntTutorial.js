/*
GruntTutorial 0.1.0- The demo project that accompanies my 'Understanding Grunt' tutorial
https://github.com/craigmaslowski/Grunt-Tutorial.git
Built on 2014-01-08
*/
module.exports = {
	add: function (a, b) {
		return a + b;
	},

	subtract: function (a, b) {
		return a - b;
	}
};
;
module.exports = {
	capitalize: function (a) {
		var arr = a.split('');
		arr[0] = arr[0].toUpperCase();
		return arr.join('');
	},

	reverse: function (a) {
		return a.split('').reverse().join('');
	}
};