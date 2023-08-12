[![Core UI - Package](https://img.shields.io/badge/Core UI-Package-E6007A?logo=polkadot =E6007A)](https://github.com/paritytech/polkadot-cloud) ![ci](https://github.com/paritytech/polkadot-cloud/actions/workflows/main.yml/badge.svg) [![License](https://img.shields.io/badge/License-GPL_3.0_only-blue.svg)](https://opensource.org/license/gpl-3-0/)

# Polkadot Cloud: Core UI

Core components for Polkadot dashboards. Using React, TypeScript, Vite, SCSS. Built using Rollup, publishable to NPM.

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

Any [core component](https://github.com/paritytech/polkadot-cloud/tree/main/packages/core-ui/lib) can now be imported and used within the app.

## Package Testing in Local Development

Components can be viewed in the app (accessed via `yarn app`) while developing, with real time updates via HMR. But it can be challenging to test components like wrappers or large items, that should ideally be tested within an existing app.

So in addition to the app, It is also possible to build the package and test it in other projects locally, before publishing the updated package to NPM. Doing this allows testing of newly updated components in a production app use-case before they are published .

The following walkthrough uses the [Polkadot staking dashboard](https://github.com/paritytech/polkadot-staking-dashboard) as **The App** and a local build of the UI library as **The Package** to test.

### The Package Setup

#### 1. Build the package:

```
yarn build
```

#### 2. Enter `dist` and link the package as a global namespace:

```
cd dist && yarn link
```

The package is now globally accessible to other projects in your development environment.

### The App Setup

#### 1. Link the previously linked package to your project.

```
yarn link @polkadotcloud/core-ui
```

Ensure that your `eslintrc` config allows global imports by turning off the extraneous dependencies rule:

```
Rules: {
  "import/no-extraneous-dependencies": "off",
  …
}
```

#### 2. Ensure global imports are supported.

Polkadot staking dashboard uses [Vite.js](https://vitejs.dev) as its toolchain. Vite by default does not allow package imports from outside the project directory without explicitly allowing them. To allow global imports, simply turn off strict mode in `vite.config.js`

```
server: {
    fs: {
      strict: false,
    }
  }
```

If you are using a toolchain with similar rules, ensure that they are amended to allow for global imports.

### Unlinking

If you wish to switch back to the published package, unlink the local package followed by a yarn install:

```
yarn unlink @polkadotcloud/core-ui && yarn install
```

To unlink the locla package entirely, run `yarn unlink` in The Package project directory.
