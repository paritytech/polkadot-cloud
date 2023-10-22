/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
/* eslint-disable @typescript-eslint/no-var-requires */

import gulp from "gulp";
import ts from "gulp-typescript";
import strip from "gulp-strip-comments";
import sourcemaps from "gulp-sourcemaps";
import merge from "merge-stream";

const { src, dest, series } = gulp;

const buildComponents = () => {
  var tsProject = ts.createProject("tsconfig.json");
  var tsResult = tsProject.src().pipe(sourcemaps.init()).pipe(tsProject());

  return merge(tsResult, tsResult.js)
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
};

const stripComments = () => {
  return src("dist/**/*.js").pipe(strip()).pipe(gulp.dest("dist"));
};

const licenseAndReadme = () => {
  return src(["LICENSE", "README.npm.md"]).pipe(dest("dist"));
};

export default series(buildComponents, stripComments, licenseAndReadme);
