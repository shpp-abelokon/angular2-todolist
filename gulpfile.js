const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');

gulp.task('sass', () => {
    return gulp.src('sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(rename ((path) =>{
            path.basename = "app.component";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', ['sass'], () => {
    gulp.watch('sass/**/*.sass', ['sass']);
});
