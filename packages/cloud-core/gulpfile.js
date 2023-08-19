/* eslint-disable @typescript-eslint/no-var-requires */
/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const lrserver = require("tiny-lr")();
const refresh = require("gulp-livereload");
const { argv } = require("yargs");

const SASS_OPTIONS = { outputStyle: "compressed" };

const licenseAndReadme = () => {
  return src(["LICENSE", "README.md"]).pipe(dest("dist"));
};

const buildFonts = () => {
  return src("lib/template/**/*.woff2")
    .pipe(dest("dist/template"))
    .pipe(refresh(lrserver));
};

const buildTemplate = () => {
  return src("lib/template/**/*.css")
    .pipe(sass(SASS_OPTIONS))
    .pipe(dest("dist/template"))
    .pipe(refresh(lrserver));
};

const buildTheme = () => {
  return src("lib/theme/**/*.css")
    .pipe(sass(SASS_OPTIONS))
    .pipe(dest("dist/theme"))
    .pipe(refresh(lrserver));
};

const buildComponents = () => {
  return src("lib/scss/**/*.scss")
    .pipe(sass(SASS_OPTIONS))
    .pipe(dest("dist/css"))
    .pipe(refresh(lrserver));
};

const watchTask = () => {
  watch(["lib/scss/**/*.scss"], buildComponents);
  watch(["lib/theme/**/*.css"], buildTheme);
  watch(["lib/template/**/*.css"], buildTemplate);
};

if (argv.task && argv.task === "watch") {
  exports.default = series(watchTask);
} else {
  exports.default = series(
    buildTemplate,
    buildTheme,
    buildComponents,
    buildFonts,
    licenseAndReadme
  );
}
