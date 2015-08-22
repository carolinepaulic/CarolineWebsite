var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    pkg = require('./package.json');
var appPath = 'src/app/';
var resourcesPath = appPath + 'resources/';

gulp.task('clean-src', function(callback) {
    del([appPath + pkg.name +  '.js', appPath + pkg.name + '.min.js'], callback);
});

gulp.task('clean-dist', function(callback) {
    del(['dist/**/*'], callback);
});

gulp.task('scripts', function() {
    return gulp.src([appPath + 'modules/**/*Module.js', appPath + 'modules/**/*.js', appPath + 'app.js'])
        .pipe(concat(pkg.name + '.js'))
        .pipe(gulp.dest(appPath));
});



gulp.task('dev', ['clean-src'], function() {
    gulp.start('scripts');
});

gulp.task('prod', ['clean-src', 'clean-dist'], function() {
    gulp.start('scripts');
});