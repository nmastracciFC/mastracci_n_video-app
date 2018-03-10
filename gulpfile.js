const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const concat = require('gulp-concat');

gulp.task('sass', function() {
	gulp.src('dev/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./prod/css/'));
});

gulp.task('scripts', function(){
	gulp.src('dev/js/**/**.js')
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('./prod/js/'));
});

gulp.task('minit', function() {
    gulp.src('prod/js/scripts.js')
        .pipe(minify({
        ext:{
            min:'-min.js'
        },
        ignoreFiles: ['-min.js']
    	}).on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('./prod/js/'));
});

gulp.task('dev',['sass','scripts']);

gulp.task('watch', function() {
	gulp.watch('dev/scss/**/*.scss', ['sass']);
	gulp.watch('dev/js/**/*.js', ['scripts']);
});

gulp.task('default', function() {
	gulp.watch('dev/scss/**/*.scss', ['sass']);
	gulp.watch('dev/js/**/*.js', ['scripts']);
});
