'use strict';

var gulp       = require('gulp'),
	  sass       = require('gulp-sass'),
    rename     = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function () {
  return gulp.src('./sass/style.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('build', function () {
  return gulp.src('./sass/style.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['default']);
});
