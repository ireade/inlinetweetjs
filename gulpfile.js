var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglifyjs');

gulp.task('script', function() {
    gulp.src('inline-tweet.js')
        .pipe(
            uglify('inline-tweet.min.js')
            .on('error', gutil.log)
        )
        .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
    gulp.watch('inline-tweet.js',['script']); 
});

gulp.task('default', ['script', 'watch']);