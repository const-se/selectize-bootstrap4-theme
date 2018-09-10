var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', () => {
    return gulp
        .src('scss/selectize.bootstrap4.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('example-selectize', () => {
    return gulp
        .src('node_modules/selectize/dist/js/standalone/selectize.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('example-html', () => {
    return gulp
        .src('template/index.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'example-selectize', 'example-html'], () => {
    gulp.watch(['scss/selectize.bootstrap4.scss'], ['sass']);
    gulp.watch(['template/index.pug'], ['example-selectize', 'example-html']);
});
