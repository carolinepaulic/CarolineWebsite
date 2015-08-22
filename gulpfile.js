var gulp = require('gulp'),
    concat = require('gulp-concat'),
    ngannotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
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

gulp.task('concat', function() {
    return gulp.src([appPath + 'modules/**/*Module.js', appPath + 'modules/**/*.js', appPath + 'app.js'])
        .pipe(concat(pkg.name + '.js'))
        .pipe(gulp.dest(appPath));
});

gulp.task('concat-minify-obfuscate', function() {
    return gulp.src([appPath + 'modules/**/*Module.js', appPath + 'modules/**/*.js', appPath + 'app.js'])
        .pipe(concat(pkg.name + '.js'))
        .pipe(gulp.dest(appPath))
        .pipe(rename({suffix: '.min'}))
        .pipe(ngannotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});



gulp.task('dev', ['clean-src'], function() {
    gulp.start('concat');
});

gulp.task('prod', ['clean-src', 'clean-dist'], function() {
    gulp.start('concat-minify-obfuscate');
});