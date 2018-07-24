var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    babel   = require('gulp-babel');


gulp.task('default', ['watch']);

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./build'));
});

gulp.task('es6', function() {
    gulp.src('./src/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./build'))
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['es6']);
    gulp.watch('./src/**/*.scss', ['sass']);
});