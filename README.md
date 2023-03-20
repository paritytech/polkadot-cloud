![example workflow](https://github.com/paritytech/polkadot-dashboard-ui/actions/workflows/main.yml/badge.svg) [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![npm version](https://badge.fury.io/js/@polkadotcloud%2Fdashboard-ui.svg)](https://www.npmjs.com/package/@polkadotcloud/dashboard-ui)

# Polkadot Dashboard UI

## UI themes and components for Polkadot dashboards. 

Components are viewable on a Vite server and exportable via a minimised Rollup build.

- [x] Zero dependency React components.
- [x] Formalised props with interface support.
- [x] 2-Dimensional theming of networks / light and dark modes.
- [x] Modular SCSS in development, minified CSS as a single export.

## Package Testing in Local Development

Components can be viewed in the sandbox (accessed via `yarn dev`) while developing, with real time updates via HMR. But it can be challenging to test components like wrappers or large items, that should ideally be tested within an existing app.

So in addition to the sandbox, It is also possible to build the package and test it in other projects locally, before publishing the updated package to NPM. Doing this allows testing of newly updated components in a production app use-case before they are published .

The following walkthrough uses the [Polkadot staking dashboard](https://github.com/paritytech/polkadot-staking-dashboard) as **_The App_**  and a local build of the UI library as **_The Package_** to test.

### The Package Setup

1. Checkout the `package-dev` branch:

```
yarn checkout package-dev
```

This branch should be identical to `main`, with the exception of the [`dist.package.json`](https://github.com/paritytech/polkadot-dashboard-ui/blob/4d66892e73afe7cc17465411b6bc7fe5817c7447/dist.package.json#L2) package name having `-dev` appended.

2. Build the package:

```
yarn build
```

3. Enter `dist` and link the package as a global namespace:

```
cd dist && yarn link
```

The package is now globally accessible to other projects in your development environment.

### The App Setup

Polkadot staking dashboard already has a `package-dev` branch set up for local package development. To allow your own app to import and test local packages, follow these steps.

1. Create a `package-dev` branch (or any naming of your choosing) specifically for local package development:

```
git checkout -b package-dev
```

2. Link the previously linked package to your project:

```
yarn link @polkadotcloud/dashboard-ui-dev
```

Ensure that your `eslintrc` config allows global imports by turning off the extraneous dependencies rule:

```
Rules: {
  "import/no-extraneous-dependencies": "off",
  …
}
```

3. Ensure global imports are supported. Polkadot staking dashboard uses [Vite.js](https://vitejs.dev) as its toolchain. Vite by default does not allow package imports from outside the project directory without explicitly allowing them. To allow global imports, simply turn off strict mode in `vite.config.js`.

```
server: {
    fs: {
      strict: false,
    }
  }
```

If you are using a toolchain with similar rules, ensure that they are amended to allow for global imports.

### Importing Local CSS and Components
It is now possible to test components from the local package, and replace currently published components with the development version. Before testing updated local components, replace the published CSS file in your app's entry file with the local version. For Polkadot staking dashboard this is [`src/main.tsx`](https://github.com/paritytech/polkadot-staking-dashboard/blob/4c07fb786f2f82b7f18f1acb1dd4183b7e04bebe/src/main.tsx#L4):

```
// Replace published import:
import '@polkadotcloud/dashboard-ui/index.css';

// with local import:
import '@polkadotcloud/dashboard-ui-dev/index.css';
```

Now components can be added or replaced with those from your local version:

```
// Replace published import:
import { ButtonHelp } from '@polkadotcloud/dashboard-ui';

// with local import:
import { ButtonHelp } from '@polkadotcloud/dashboard-ui-dev';
```

Changes can be committed to this `package-dev` branch without impacting your main branch configs, linting rules and existing published component imports.

### Unlink the package
If you are trying to rename your pacakge, it is a good practice to unlink(remove) the unused one by running `yarn unlink [package]`:

```
yarn unlink @polkadotcloud/dashboard-ui-dev
```