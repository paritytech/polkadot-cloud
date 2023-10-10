/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const AccountsExample = () => {
  const code = `import {
  useExtensionAccounts,
} from '@polkadot-cloud/react/hooks';

const ConnectedAccounts = () => {
  const { extensionAccounts } = useExtensionAccounts();

  return (
    <>
      {extensionAccounts.map((account) => <p key={account.address}>{account.address}</p>)
    </>
  );
);`;

  return <SimpleEditor code={code} standalone />;
};
