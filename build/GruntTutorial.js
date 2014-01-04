/*
GruntTutorial 0.1.0- The demo project that accompanies my 'Understanding Grunt' tutorial
https://github.com/craigmaslowski/Grunt-Tutorial.git
Built on 2014-01-03
*/
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}
;
function capitalize(a) {
	var arr = a.split('');
	arr[0] = arr[0].toUppercase();
	return arr.join('');
}

function reverse(a) {
	return a.split('').reverse().join('');
}