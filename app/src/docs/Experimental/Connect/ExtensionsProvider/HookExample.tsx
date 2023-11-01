/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const HookExample = () => {
  const code = `import { useExtensions } from '@polkadot-cloud/react/hooks';

const App = () => {
  const { extensions } = useExtensions();
  ...
}`;

  return <SimpleEditor code={code} standalone />;
};
