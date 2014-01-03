function capitalize(a) {
	var arr = a.split('');
	arr[0] = arr[0].toUppercase();
	return arr.join('');
}

function reverse(a) {
	return a.split('').reverse().join('');
}