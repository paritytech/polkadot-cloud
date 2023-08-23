/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
/* eslint-disable @typescript-eslint/no-var-requires */

import gulp from "gulp";
import lrserver from "tiny-lr";
import refresh from "gulp-livereload";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import ts from "gulp-typescript";
import strip from "gulp-strip-comments";

const sass = gulpSass(dartSass);

const { src, dest, series } = gulp;
const SASS_OPTIONS = { outputStyle: "compressed" };

const buildScss = () => {
  return src("lib/**/*.scss")
    .pipe(sass(SASS_OPTIONS))
    .pipe(dest("dist"))
    .pipe(refresh(lrserver));
};

const buildComponents = () => {
  const tsProject = ts.createProject("tsconfig.json");

  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"))
    .pipe(refresh(lrserver));
};

const stripComments = () => {
  return src("dist/**/*.js").pipe(strip()).pipe(gulp.dest("dist"));
};

const licenseAndReadme = () => {
  return src(["LICENSE", "README.md"]).pipe(dest("dist"));
};

export default series(
  buildScss,
  buildComponents,
  stripComments,
  licenseAndReadme
);
