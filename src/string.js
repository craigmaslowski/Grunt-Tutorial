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