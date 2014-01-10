var fs = require('fs'),
	path = require('path'),
	gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	mocha = require('gulp-mocha');

var pkg = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, './package.json'))
);

gulp.task('jshint:dev', function () {
	gulp.src(['gulpfile.js', 'tests/**/*.js'])
		.pipe(jshint({
				maxlen: 80,
				quotmark: 'single'
			}))
		.pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function () {
	gulp.src(['src/*.js'])
		.pipe(jshint({
				maxlen: 80,
				quotmark: 'single'
			}))
		.pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
	gulp.src(['tests/**/*.js'])
		.pipe(mocha());
});

gulp.task('concat', function () {
	gulp.src(['src/*.js'])
		.pipe(concat(pkg.name + '.js'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('minify', function () {
	gulp.src(['./build/' + pkg.name + '.js'])
		.pipe(uglify())
		.pipe(gulp.dest('./build/min/'));
});


gulp.task('development', function () {
	gulp.watch(['gruntfile.js', 'src/*.js', 'tests/**/*.js'], function () {
		gulp.run('jshint:dev', 'jshint:app', 'test');
	});
});

gulp.task('default', function () {
	gulp.run('jshint:dev', 'jshint:app', 'test', 'concat', 'minify');
});
