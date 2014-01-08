var expect = require('chai').expect,
	string = require('../src/string');

describe('capitalize', function () {
	it('should return "Foo" when passed the param ("foo")', function () {
		expect(string.capitalize('foo')).to.equal('Foo');
	});
});

describe('reverse', function () {
	it('should return "oof" when passed the param ("foo")', function () {
		expect(string.reverse('foo')).to.equal('oof');
	});
});