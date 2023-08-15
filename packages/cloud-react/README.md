[![React - Package](https://img.shields.io/badge/React-Package-E6007A?logo=polkadot =E6007A)](https://github.com/paritytech/polkadot-cloud) ![ci](https://github.com/paritytech/polkadot-cloud/actions/workflows/main.yml/badge.svg) [![License](https://img.shields.io/badge/License-GPL_3.0_only-blue.svg)](https://opensource.org/license/gpl-3-0/)

# Polkadot Cloud: Core Cloud

Core reusalbe structures (e.g. scss, utils etc) for Polkadot components. Using SCSS, Typescripy etc. Built using Gulp, publishable to NPM.

## Managing the Package

#### Start the development server for real-time component feedback.

```
yarn dev
```

#### Build the package into an optimised Rollup build.

```
yarn build
```

#### Publish the package to NPM.

```
cd dist && npm publish --access public
```

## Using the Package

#### Import the CSS file in your app index.

```
import '@polkadotcloud/core-cloud/.../<component>/index.css';
```

Structure of SCSS directories and files should be the same as per components