var gulp = require('gulp'),
    concat = require('gulp-concat'),
    ngannotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    processhtml = require('gulp-processhtml'),
    del = require('del'),
    livereload = require('gulp-livereload'),
    pkg = require('./package.json');
var appPath = 'src/app/';
var resourcesPath = appPath + 'resources/';
var distPath = 'dist/';

gulp.task('clean-src', function(callback) {
    del([appPath + pkg.name +  '.js', appPath + pkg.name + '.min.js'], callback);
});

gulp.task('clean-dist', function(callback) {
    del([distPath + '**/*'], callback);
});

gulp.task('concat', function() {
    return gulp.src([appPath + 'modules/**/*Module.js', appPath + 'modules/**/*.js', appPath + 'app.js'])
        .pipe(concat(pkg.name + '.js'))
        .pipe(gulp.dest(appPath));
});

gulp.task('js-minify-obfuscate', ['concat'], function() {
    return gulp.src([appPath + pkg.name + '.js'])
        .pipe(rename({suffix: '.min'}))
        .pipe(ngannotate())
        .pipe(uglify())
        .pipe(gulp.dest(distPath + appPath));
});

gulp.task('css-minify', function() {
    return gulp.src([resourcesPath + 'css/application.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(distPath + resourcesPath + 'css/'));
});

gulp.task('process-index', function() {
    return gulp.src([appPath + 'index.html'])
        .pipe(processhtml())
        .pipe(gulp.dest(distPath + appPath));
});

gulp.task('copy-to-dist', function() {
    gulp.src([appPath + 'modules/**/*.html'])
        .pipe(gulp.dest(distPath + appPath + 'modules/'));
    gulp.src([resourcesPath + 'css/*.min.css'])
        .pipe(gulp.dest(distPath + resourcesPath + 'css/'));
    gulp.src(['bower_components/**/*.min.js'])
        .pipe(gulp.dest(distPath + resourcesPath + 'js/'));
    gulp.src([resourcesPath + 'documents/**/*'])
        .pipe(gulp.dest(distPath + resourcesPath + 'documents/'));
    gulp.src([resourcesPath + 'fonts/**/*'])
        .pipe(gulp.dest(distPath + resourcesPath + 'fonts/'));
    gulp.src([resourcesPath + 'images/**/*'])
        .pipe(gulp.dest(distPath + resourcesPath + 'images/'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch([appPath + 'modules/**', resourcesPath, appPath + 'app.js', appPath + 'index.html'], ['dev']);
    gulp.watch([appPath + pkg.name + '.js']).on('change', livereload.changed);
});



gulp.task('dev', ['clean-src'], function() {
    gulp.start('concat');
});

gulp.task('prod', ['clean-src', 'clean-dist'], function() {
    gulp.start('js-minify-obfuscate', 'css-minify', 'process-index', 'copy-to-dist');
});