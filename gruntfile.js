module.exports = function(grunt) {
	var banner = '/*\n<%= pkg.name %> <%= pkg.version %> - <%= pkg.description %>\n<%= pkg.repository.url %>\nBuilt on <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});
};