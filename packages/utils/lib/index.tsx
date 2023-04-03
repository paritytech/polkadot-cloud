// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

// IMPORTANT: Rollup treats this file as the entry point for the package, the build of which is
// configured with a separate tsconfig.json file that treats `lib` as the `baseUrl` of the project.
// This is to build `lib` files at the top-level of the final bundled package.
//
// Because of this relative file paths should be used in this directory.

export const testUtil = () => {
  console.log("Hello world!");
};
