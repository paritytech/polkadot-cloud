/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const ConnectExample = () => {
  const code = `import {
    useExtensionAccounts,
  } from '@polkadot-cloud/react/hooks';

const ConnectAccounts = () => {
  const { connectExtensionAccounts } = useExtensionAccounts();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (extension) connectExtensionAccounts('subwallet-js');
        }}
      >
        Connect to Subwallet JS
      </button>
      <App />
    </>
  );
);`;

  return <SimpleEditor code={code} standalone />;
};
