var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del');
var appPath = 'src/app/';
var resourcesPath = appPath + 'resources/';

gulp.task('clean', function(callback) {
    del([appPath + '<%= pkg.name %>.js', appPath + "<%= pkg.name =>.min.js", 'dist/**/*'], callback);
});