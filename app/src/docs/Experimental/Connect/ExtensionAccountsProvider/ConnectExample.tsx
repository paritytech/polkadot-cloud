/* @license Copyright 2023 @polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const ConnectExample = () => {
  const code = `import {
    useExtensions,
    useExtensionAccounts,
  } from '@polkadot-cloud/react/hooks';

const ConnectAccounts = () => {
  const { extensions } = useExtensions();
  const { connectExtensionAccounts } = useExtensionAccounts();
  
  const extension = extensions.find((e) => e.id === 'subwallet-js');

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (extension) connectExtensionAccounts(extension);
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
