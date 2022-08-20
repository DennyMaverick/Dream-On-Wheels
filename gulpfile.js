global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),
  imageminJpegRecompress: require("imagemin-jpeg-recompress"),
  pngquant: require("imagemin-pngquant"),
  del: require("del"),
  strips: require("gulp-strip-comments"),
  path: {
    config: require("./gulp/config.js"),
    js: "./js/main.js",
    jquerylib: "./node_modules/jquery/dist/jquery.js",
    jslibs: ["./node_modules/slick-carousel/slick/slick.js"],
  },
}

$.path.config.forEach(function (path) {
  require(path)()
})
