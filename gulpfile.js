'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./app/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'));
});

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});



 
