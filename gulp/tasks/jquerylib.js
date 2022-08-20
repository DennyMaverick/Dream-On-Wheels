module.exports = function () {
  const isProd = process.argv.includes("--production")
  // const isDev = !isProd;
  $.gulp.task("jquerylib", function () {
    return $.gulp
      .src($.path.jquerylib)
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.babel({presets: ["@babel/preset-env"]}))
      .pipe($.gp.concat("jquery.js"))
      .pipe($.gp.uglify())
      .pipe($.gp.rename("jquery.min.js"))
      .pipe($.gp.sourcemaps.write(""))
      .pipe($.strips())
      .pipe($.gulp.dest("build/js/libs/jquery"))
      .pipe($.browserSync.stream())
  })
}
