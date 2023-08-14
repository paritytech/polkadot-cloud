/* eslint-disable @typescript-eslint/no-var-requires */
/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

const {
  src,
  dest,
  series,
  //, watch
} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildTemplate() {
  return src("lib/template/**/*.css")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("dist/template"));
}

function buildTheme() {
  return src("lib/theme/**/*.css")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("dist/theme"));
}

function buildComponents() {
  return src("lib/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("dist/css"));
}

// TODO: create a watchTask for dev experience

// function watchTask() {
//   watch(["scss/**/*.scss"], buildComponents);
//   watch(["theme/**/*.css"], buildTheme);
//   watch(["template/**/*.css"], buildTemplate);
// }

exports.default = series(buildTemplate, buildTheme, buildComponents);
