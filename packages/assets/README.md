[![Community - Package](https://img.shields.io/badge/Community-Package-E6007A?logo=polkadot&logoColor=E6007A)](https://github.com/paritytech/polkadot-cloud) ![ci](https://github.com/paritytech/polkadot-cloud/actions/workflows/main.yml/badge.svg) [![License](https://img.shields.io/badge/License-GPL_3.0_only-blue.svg)](https://opensource.org/license/gpl-3-0/)

# Polkadot Cloud: Assets

Data and static assets for Polkadot apps.

## Adding Web Extension Wallets

To add a web extension wallet, submit a PR with the following changes:
* **Icon**: Add the extension icon as an SVG Component in [this folder](https://github.com/paritytech/polkadot-cloud/tree/main/packages/assets/extensions/jsx).
* **Extension details**: Add the extension details to the `Extensions` JSON object in [this file](https://github.com/paritytech/polkadot-cloud/blob/main/packages/assets/extensions/index.tsx).

## Adding Validator Operators

Validator operators can add their contact information, icon, and which validators they operate, to the dashboard’s Community section. The Community feature is designed to give non-biased exposure to validator operators, and to host a fully-featured validator browser just for that operator's validators.

To add an operator, submit a PR with the following changes:

- **Thumbnail:** Add your operator's thumbnail as an SVG Component in [this folder](https://github.com/paritytech/polkadot-cloud/tree/main/packages/assets/validators/thumbnails).
- **Operator details:** Add your operator details to the `ValidatorCommunity` JSON object in [this file](https://github.com/paritytech/polkadot-cloud/blob/main/packages/assets/validators/index.ts).

### Operator Structure

The following table outlines the structure of a `ValidatorCommunity` entry:

| Element        | Key          | Required | Notes                                                                                       | Example                                                 |
| -------------- | ------------ | -------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Operator Name  | `name`       | Yes      | The chosen name of the operator.                                                            | `Validator Central`                                     |
| Thumbnail Name | `thumbnail`  | Yes      | The name of your SVG component representing your thumbnail.                                 | _See Below_                                             |
| Bio            | `bio`        | No       | A short description of your entity. Maximum 300 characters.                                 | `Summing up my validator identity in a sentence or so.` |
| Email Address  | `email`      | No       | A public email address representing the operator.                                           | `validatorcentral@parity.io`                            |
| Twitter Handle | `twitter`    | No       | The Twitter handle representing the operator.                                               | `@ParityTech`                                           |
| Website URL    | `website`    | No       | A live and vlid secure URL to your website.                                                 | `https://parity.io`                                     |
| Validator List | `validators` | Yes      | A list of validators grouped by network. At least 1 validator in 1 network must be defined. | _See Below_                                             |

### Example Operator

Upload your SVG icon as a React component. Look at the existing icons as examples, or use the [SVGR Playground](https://react-svgr.com/playground/) to convert your raw SVG file into a component.

Next, add your operator details to the `ValidatorCommunity` object. Only provide the validator(s) for the particular network(s) you are operating in. If you have no operating validators on Kusama, for example, the `kusama` key can be omitted.

The following example defines 2 validators on the Polkadot network, and 1 on Kusama:

```
export const ValidatorCommunity = [
  ...
  {
    name: 'Validator Central',
    thumbnail: 'ValidatorCentral',
    bio: 'Summing up my validator identity in a sentence or so. Maximum 300 characters.',
    email: 'validatorcentral@parity.io',
    twitter: '@ParityTech',
    website: 'https://parity.io',
    validators: {
      polkadot: [
      '1hYiMW8KSfUYChzCQSPGXvMSyKVqmyvMXqohjKr3oU5PCXF',
      '14QSBoJMHF2Zn2XEoLNSeWgqBRr8XoKPy4BxToD6yLSeFFYe'
      ],
      kusama: ['FykhnPA3pn269LAcQ8VQKDgUQ8ieAaSLwJDhAVhu3dcokVR'],
    },
  },
  ...
];

```

### General Requirements

| Requirement | Notes                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accuracy    | Operator contact details must be working and valid.                                                                                                                                               |
| Liveness    | All submitted validator addresses must be discoverable as a validator on the network in question - whether Polkadot or Kusama.                                                                    |
| Ordering    | Please place your operator in alphabetical order within `ValidatorCommunity`. |

Please submit an issue for any queries around adding your operator details.
