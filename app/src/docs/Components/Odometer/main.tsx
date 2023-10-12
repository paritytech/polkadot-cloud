/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Note } from "@docs/Note";
import { Header } from "@docs/Header";
import { OdometerH1 } from "./OdometerH1";
import { H2, H3 } from "@docs/Headers";
import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Odometer"
        subtitle="An odometer effect used for numbers and balances."
        npm={npm}
        status="stable"
      />
      <p>
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/cloud-react/lib/complex/Odometer/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>Odeometer</code>
        </a>{" "}
        is a component that can be used to display numbers and balances. It has
        a smooth animation when the value changes, and adopts a 2-tone design
        for whole and decimal figures.
      </p>
      <p>Comma formatted numbers and decimals are supported.</p>
      <H3 id="example">Odometer Example</H3>
      <OdometerH1 />
      <p>
        Odometer is wrapped in a span element, but it is recommended to embed it
        within a header or paragraph tag so it inherits font size, line height
        and text styling.
      </p>
      <Note>
        <p>
          Odometer has been tested with header tags 1-5, paragraphs and divs.
        </p>
      </Note>

      <hr className="md" />

      <H2 id="css-variables-used">CSS Variables Used</H2>

      <ul>
        <li>
          <code>--text-color-primary</code>: Whole unit text color of an
          Odometer value.
        </li>
        <li>
          <code>--text-color-tertiary</code>: Decimal unit text color of an
          Odometer value.
        </li>
      </ul>
    </>
  );
};
