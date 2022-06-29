module.exports = function () {
  const sass = require('gulp-sass')(require('sass'));
  const sassGlob = require('gulp-sass-glob');
  $.gulp.task('sass', function () {
    return $.gulp.src('sass/style.scss')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
          title: 'SCSS',
          message: error.message
        }))
      }))
      .pipe($.gp.sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass())
      .pipe($.gp.autoprefixer())
      .pipe($.gp.csso())
      .pipe($.gp.rename('style.min.css'))
      .pipe($.gp.sourcemaps.write(''))
      .pipe($.gulp.dest('build/css'))
      .pipe($.browserSync.stream());
  });
};