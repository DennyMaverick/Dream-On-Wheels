module.exports = function () {
  $.gulp.task("serve", function () {
    $.browserSync.init({
      server: "build/",
      browser: "chrome",
    });

    $.gulp.watch("less/**/*.less", $.gulp.series("less"));
    $.gulp.watch("*.html", $.gulp.series("html"));
    $.gulp.watch("js/**/*.js", $.gulp.series("scripts"));
    $.gulp.watch("css/**/*.css", $.gulp.series("css"));
    $.gulp.watch("img/**/*.{png,jpg,svg}", $.gulp.series("allimg"));
    $.gulp.watch("img/**/*.{svg}", $.gulp.series("svg"));
    $.gulp.watch(
      "font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}",
      $.gulp.series("font")
    );
    $.gulp.watch("img/sprite/**/*.svg", $.gulp.series("svg"));
  });
};
