/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const OpenOverlay = () => {
  const code = `import { useOverlay } from '@polkadot-cloud/react/hooks';

export const AppComponent = () => {
  const { openModal } = useOverlay().modal;

  return (
    <>
    <button
      onClick={() =>
        openModal({
          key: "MyModal",
          options: { myVal: 'value' } /* optional */
          size: "sm" /* optional */
        })
      }
    >Open Modal
    </button>
    </>
}`;

  return <SimpleEditor code={code} standalone />;
};
