var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglifyjs');

gulp.task('script', function() {
    gulp.src('src/inline-tweet.js')
        .pipe(
            uglify('inline-tweet.min.js')
            .on('error', gutil.log)
        )
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
    gulp.watch('src/inline-tweet.js',['script']); 
});

gulp.task('default', ['script', 'watch']);