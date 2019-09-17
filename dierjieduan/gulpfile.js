
var gulp=require('gulp')
var uglify=require('gulp-uglify')
var concat=require('gulp-concat')
var imagemin=require('gulp-imagemin')
// var less=require('gulp-less')
gulp.task('yasuo',function(){
    return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/bulid/js'))
})
// gulp.task('hebing',function(){
//     return gulp.src('src/*.js')
//     .pipe(uglify())
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('dest/build'))
// })
gulp.task('yasuotupian',function(){
    return gulp.src('src/image/*.{jpg,png}')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/bulid/image'))
})
var less=require('gulp-less');
gulp.task('lesss',function(){
    return gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dest/bulid/css'))
})