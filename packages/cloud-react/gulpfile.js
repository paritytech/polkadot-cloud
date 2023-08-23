/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
/* eslint-disable @typescript-eslint/no-var-requires */

import gulp from "gulp";
import lrserver from "tiny-lr";
import refresh from "gulp-livereload";
import ts from "gulp-typescript";
import strip from "gulp-strip-comments";

const { src, dest, series } = gulp;

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

export default series(buildComponents, stripComments, licenseAndReadme);
