module.exports = function () {
  const lessAutoprefix = require("less-plugin-autoprefix");
  // const path = require("path");
  const autoprefix = new lessAutoprefix({browsers: ["last 2 versions"]});
  const less = require("gulp-less");
  $.gulp.task("less", function () {
    return $.gulp
      .src(["less/style.less"])
      .pipe(
        $.gp.plumber({
          errorHandler: $.gp.notify.onError((error) => ({
            title: "LESS",
            message: error.message,
          })),
        })
      )
      .pipe($.gp.sourcemaps.init())
      .pipe(
        less({
          plugins: [autoprefix],
          // paths: [path.join("./less/**/*.less", "less", "includes")],
        })
      )
      .pipe($.gulp.dest("build/css"))
      .on("end", $.browserSync.reload)
      .pipe($.gp.csso())
      .pipe($.gp.rename("style.min.css"))
      .pipe($.gp.sourcemaps.write(""))
      .pipe($.gulp.dest("build/css"))
      .on("end", $.browserSync.reload)
      .pipe($.browserSync.stream())
  });
};
