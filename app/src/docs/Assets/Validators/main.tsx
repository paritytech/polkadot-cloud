/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Note } from "@docs/Note";
import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { ValidatorOperator } from "./ValidatorOperator";
import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Validator Operators"
        subtitle="A list of Polkadot validator operators with metadata and thumbnails."
        npm={npm}
        status="stable"
      />

      <p>
        A list of validator operators are available as a{" "}
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/assets/lib/validators/index.ts"
          target="_blank"
          rel="noreferrer"
        >
          <code>ValidatorCommunity</code>
        </a>{" "}
        object, along with each operator's thumbnail icon in SVG format.
      </p>

      <p>Validators for Polkadot and Kusama are currently supported.</p>

      <ValidatorOperator />

      <Note>
        <p>
          To open a PR to add an additional validator operator to this list,
          refer to the instructions hosted in this package's{" "}
          <a
            href="https://github.com/paritytech/polkadot-cloud/tree/main/packages/assets#adding-validator-operators"
            target="_blank"
            rel="noreferrer"
          >
            README file
          </a>
          .
        </p>
      </Note>
    </>
  );
};
