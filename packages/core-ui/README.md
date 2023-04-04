![example workflow](https://github.com/paritytech/polkadot-dashboard-ui/actions/workflows/main.yml/badge.svg) [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![npm version](https://badge.fury.io/js/@polkadotcloud%2Fdashboard-ui.svg)](https://www.npmjs.com/package/@polkadotcloud/dashboard-ui)

# Polkadot Core UI

CSS themes and core components for Polkadot dashboards, using React, TypeScript, Vite, SCSS. Built using Rollup, publishable to NPM.

## Managing the Package

#### Start the development server for real-time component feedback.

```
yarn dev
```

#### Build the package into an optimised Rollup build.

Update your [`dist.package.json`](https://github.com/paritytech/polkadot-dashboard-ui/blob/main/packages/core-ui/dist.package.json) before building the package. `dist.package.json` is injected into the `dist` folder as `package.json` after a build completes.

```
yarn build
```

#### Publish the package to NPM.

```
cd dist && npm publish --access public
```

## Using the Package

#### 1. Import the CSS file in your app index.

```
import '@polkadotcloud/core-ui/index.css';
```

#### 2. Wrap your app with `Entry`, providing the current theme `mode` and active `network`.

```
import { Entry } from '@polkadotcloud/core-ui';

export const WrappedApp: React.FC = () => {

  // light, dark
  const { mode } = useTheme();

  // polkadot, kusama, westend
  const { network } = useApi();

  return (
    <Entry mode={mode} network={network}>
      <App />
    </Entry>
  );
};
```

#### 3. Import core components.

Any [core component](https://github.com/paritytech/polkadot-dashboard-ui/tree/main/packages/core-ui/lib) can now be imported and used within the app.

## Package Testing in Local Development

Components can be viewed in the sandbox (accessed via `yarn dev`) while developing, with real time updates via HMR. But it can be challenging to test components like wrappers or large items, that should ideally be tested within an existing app.

So in addition to the sandbox, It is also possible to build the package and test it in other projects locally, before publishing the updated package to NPM. Doing this allows testing of newly updated components in a production app use-case before they are published .

The following walkthrough uses the [Polkadot staking dashboard](https://github.com/paritytech/polkadot-staking-dashboard) as **The App** and a local build of the UI library as **The Package** to test.

### The Package Setup

#### 1. Checkout the `package-dev` branch.

```
git checkout -b package-dev
```

This branch should be identical to `main`, with the exception of the [`dist.package.json`](https://github.com/paritytech/polkadot-dashboard-ui/blob/main/packages/core-ui/dist.package.json) package `name` property having `-dev` appended.

#### 2. Build the package.

```
yarn build
```

#### 3. Enter `dist` and link the package as a global namespace.

```
cd dist && yarn link
```

The package is now globally accessible to other projects in your development environment.

### The App Setup

Polkadot staking dashboard already has a `package-dev` branch set up for local package development. To allow your own app to import and test local packages, follow these steps.

#### 1. Create a `package-dev` branch (or any naming of your choosing) specifically for local package development.

```
git checkout -b package-dev
```

#### 2. Link the previously linked package to your project.

```
yarn link @polkadotcloud/core-ui-dev
```

Ensure that your `eslintrc` config allows global imports by turning off the extraneous dependencies rule:

```
Rules: {
  "import/no-extraneous-dependencies": "off",
  …
}
```

#### 3. Ensure global imports are supported.

Polkadot staking dashboard uses [Vite.js](https://vitejs.dev) as its toolchain. Vite by default does not allow package imports from outside the project directory without explicitly allowing them. To allow global imports, simply turn off strict mode in `vite.config.js`

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
import '@polkadotcloud/core-ui/index.css';

// with local import:
import '@polkadotcloud/core-ui-dev/index.css';
```

Now components can be added or replaced with those from your local version:

```
// Replace published import:
import { ButtonHelp } from '@polkadotcloud/core-ui';

// with local import:
import { ButtonHelp } from '@polkadotcloud/core-ui-dev';
```

Changes can be committed to this `package-dev` branch without impacting your main branch configs, linting rules and existing published component imports.

### Unlinking

If you wish to rename or deprecate a local development package, it is a good practice to unlink (remove) it by running `yarn unlink [package]` in The App project directory:

```
yarn unlink @polkadotcloud/core-ui-dev
```

Followed by `yarn unlink` in The Package project directory.
