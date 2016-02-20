var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('styles', function(){
  gulp.src(['BeanFlick/public/style/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('BeanFlick/public/min/style/'))
    .pipe(minifycss())
    .pipe(gulp.dest('BeanFlick/public/min/style/'))
});

gulp.task('scripts', function(){
  return gulp.src('BeanFlick/public/script/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(babel())
    .pipe(gulp.dest('BeanFlick/public/min/script/'))
    .pipe(uglify())
    .pipe(gulp.dest('BeanFlick/public/min/script/'))
});

gulp.task('default', function(){
  gulp.watch("BeanFlick/public/style/**/*.scss", ['styles']);
  gulp.watch("BeanFlick/public/script/**/*.js", ['scripts']);
});