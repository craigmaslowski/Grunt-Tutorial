var expect = require('chai').expect,
	math = require('../src/math');

describe('add', function () {
	it('should return 3 when passed the params (1, 2)', function () {
		expect(math.add(1, 2)).to.equal(3);
	});
});

describe('subtract', function () {
	it('should return -1 when passed the params (1, 2)', function () {
		expect(math.subtract(1, 2)).to.equal(-1);
	});
});