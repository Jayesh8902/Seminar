const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyle() {
  return src('BeSpokeCss/**/*.scss')
  .pipe(sass())
  .pipe(dest('css'))
}

function watchTask() {
  watch(['BeSpokeCss/**/*.scss'], buildStyle);
}

exports.default = series(buildStyle, watchTask)
