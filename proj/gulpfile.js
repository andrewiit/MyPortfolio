const 
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    pug = require('gulp-pug'),
    rename = require("gulp-rename"),
    gulp_watch_pug = require('gulp-watch-pug'),
    sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass')(require('sass'));


gulp.task('mytask',function buildHTML() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(rename('./index.html'))
        .pipe(gulp.dest('./'))
        .pipe(watch('pug/**/*.pug'))
        .pipe(gulp_watch_pug('pug/**/*.pug', { delay: 100 }))
        .pipe(pug(
            {
                pretty: true
            }
        ))
}

       


  
//   exports.buildStyles = buildStyles,
  
);