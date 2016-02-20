var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('styles', function(){
  gulp.src(['public/styles/style.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('public/min/styles/'))
    .pipe(minifycss())
    .pipe(gulp.dest('public/min/styles/'))
});

gulp.task('scripts', function(){
  return gulp.src('public/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(babel())
    .pipe(gulp.dest('public/min/scripts/'))
    .pipe(uglify())
    .pipe(gulp.dest('public/min/scripts/'))
});

gulp.task('default', ['styles', 'scripts'], function (){
  gulp.watch("public/styles/**/*.scss", ['styles']);
  gulp.watch("public/scripts/**/*.js", ['scripts']);
});