var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var merge = require('merge-stream');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['sass']);

gulp.task('watch', function() {
    gulp.watch('scss/*', ['sass']);
});

gulp.task('sass', function() {
    gulp.src('./scss/app.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed', errLogToConsole: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});