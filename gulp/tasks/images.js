module.exports = function () {
  $.gulp.task("images", function () {
    return $.gulp
      .src("./img/**/*.{png,jpg,svg}")
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest("build/img"));
  });
};
