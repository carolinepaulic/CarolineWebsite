var gulp = require('gulp'),
    concat = require('gulp-concat'),
    ngannotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
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

gulp.task('css-minify', function() {
    return gulp.src([resourcesPath + 'css/application.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/' + resourcesPath + 'css/'));
});

gulp.task('copy-module-templates', function() {
    return gulp.src([appPath + 'modules/**/*.html'])
        .pipe(gulp.dest('dist/' + appPath + 'modules/'));
});

gulp.task('copy-minified-css', function() {
    return gulp.src([resourcesPath + 'css/application.min.css'])
        .pipe(gulp.dest('dist/' + resourcesPath + 'css/'));
});

gulp.task('copy-libs', function() {
    return gulp.src(['bower_components/**/*.min.js'])
        .pipe(gulp.dest('dist/' + resourcesPath + 'js/'));
});

gulp.task('copy-documents', function() {
    return gulp.src([resourcesPath + 'documents/**/*'])
        .pipe(gulp.dest('dist/' + resourcesPath + 'documents/'));
});

gulp.task('copy-fonts', function() {
    return gulp.src([resourcesPath + 'fonts/**/*'])
        .pipe(gulp.dest('dist/' + resourcesPath + 'fonts/'));
});

gulp.task('copy-images', function() {
    return gulp.src([resourcesPath + 'images/**/*'])
        .pipe(gulp.dest('dist/' + resourcesPath + 'images/'));
});



gulp.task('dev', ['clean-src'], function() {
    gulp.start('concat');
});

gulp.task('prod', ['clean-src', 'clean-dist'], function() {
    gulp.start('concat-minify-obfuscate', 'css-minify', 'copy-libs', 'copy-documents', 'copy-fonts', 'copy-images', 'copy-module-templates', 'copy-minified-css');
});