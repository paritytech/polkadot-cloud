/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const AccentColorExample = () => {
  const code = `.theme-my-identity {
 --accent-color-primary-light: #4d3091;
 --accent-color-primary-dark: #8e73b6;
}`;

  return <SimpleEditor code={code} language="css" standalone />;
};
