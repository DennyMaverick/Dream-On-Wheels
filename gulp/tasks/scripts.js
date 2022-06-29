module.exports = function () {
  const isProd = process.argv.includes("--production");
  // const isDev = !isProd;
  const gulpif = require("gulp-if");
  const webpack = require("webpack-stream");
  $.gulp.task("scripts", function () {
    return $.gulp
      .src($.path.js)
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.babel({presets: ["@babel/preset-env"]}))
      .pipe(
        webpack({
          mode: isProd ? "production" : "development",
        })
      )
      .pipe($.gp.concat("all.js"))
      .pipe($.gp.uglify())
      .pipe($.gp.rename("all.min.js"))
      .pipe($.gp.sourcemaps.write(""))
      .pipe($.gulp.dest("build/js"))
      .pipe($.browserSync.stream());
  });
};
