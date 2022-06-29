module.exports = function () {
  const newer = require("gulp-newer");
  const fonter = require("gulp-fonter");
  const ttf2woff2 = require("gulp-ttf2woff2");
  $.gulp.task("font", function () {
    return $.gulp
      .src("font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}")
      .pipe(
        $.gp.plumber({
          errorHandler: $.gp.notify.onError((error) => ({
            title: "FONT",
            message: error.message,
          })),
        })
      )
      .pipe(newer("build/font"))
      .pipe(
        fonter({
          formats: ["ttf", "woff", "eot", "svg"],
        })
      )
      .pipe($.gulp.dest("build/font"))
      .on("end", $.browserSync.reload)
      .pipe(ttf2woff2())
      .pipe($.gulp.dest("build/font"))
      .on("end", $.browserSync.reload)
      .pipe($.browserSync.stream());
  });
};
