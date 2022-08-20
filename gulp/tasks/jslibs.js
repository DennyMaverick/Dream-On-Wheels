module.exports = function () {
  const isProd = process.argv.includes("--production")
  // const isDev = !isProd;
  $.gulp.task("jslibs", function () {
    return $.gulp
      .src($.path.jslibs)
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.babel({presets: ["@babel/preset-env"]}))
      .pipe($.gp.concat("libs.js"))
      .pipe($.gp.uglify())
      .pipe($.gp.rename("libs.min.js"))
      .pipe($.gp.sourcemaps.write(""))
      .pipe($.strips())
      .pipe($.gulp.dest("build/js/libs"))
      .pipe($.browserSync.stream())
  })
}
