const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildTemplate() {
  return src("template/**/*.css")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("dist/template"));
}

function buildTheme() {
  return src("theme/**/*.css")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("dist/theme"));
}

function buildComponents() {
  return src("scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("dist/css"));
}

exports.default = series(buildTemplate, buildTheme, buildComponents);
