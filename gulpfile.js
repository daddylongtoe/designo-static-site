const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  return src('./styles/sass/index.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['**/*.html', '**/*.js'] }))
    .pipe(dest('./styles/css'));
}

function watchTask() {
  watch(['./styles/**/*.scss', '**/*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
