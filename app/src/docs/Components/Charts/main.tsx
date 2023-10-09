/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { PieSimple } from "./PieSimple";
import { DonutStyles } from "./DonutStyles";
import { ChartSpeed } from "./ChartSpeed";

import { DocProps } from "@docs/types";
import { PieDead } from "./PieDead";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Charts"
        subtitle="Light-weight charts for displaying simple statistics."
        npm={npm}
        status="stable"
      />
      <h3>Pie Chart</h3>
      <p>
        The <code>Chart</code> component is a light-weight, CSS-rendered pie and
        donut chart designed to display simple statistics. Charts can support
        multiple segments and adjust their size via the <code>diameter</code>{" "}
        prop.
      </p>

      <p>
        Pass <code>items</code> into <code>Chart</code> consisting of{" "}
        <code>value</code> and <code>color</code> properties:
      </p>

      <PieSimple />

      <h3>Empty Chart</h3>

      <p>
        If the sum of all chart values equate to zero, the chart will display no
        segments and simply render a circle with a background color of{" "}
        <code>&#8209;&#8209;background&#8209;default</code>:
      </p>

      <PieDead />

      <h3>Donut Chart</h3>

      <p>
        Donut charts can also be configured using the <code>innerRadius</code>{" "}
        prop:
      </p>

      <DonutStyles />

      <h3>Transition Speed</h3>

      <p>
        To control transition speed, the <code>speed</code> prop can be passed
        into charts. The default speed is <code>1</code> second:
      </p>

      <ChartSpeed />

      <h2>CSS Variables Used</h2>

      <ul>
        <li>
          <code>--background-default</code>: Default background for empty
          charts.
        </li>
      </ul>
    </>
  );
};
