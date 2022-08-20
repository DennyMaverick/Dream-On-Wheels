module.exports = function () {
  $.gulp.task("build", $.gulp.series("clean", "copy", "less", "scripts", "jslibs", "jquerylib", "css", "font", "images", "svg"))
};
