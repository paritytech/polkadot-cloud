/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { PieSimple } from "./PieSimple";
import { DonutStyles } from "./DonutStyles";
import { ChartSpeed } from "./ChartSpeed";

import { DocProps } from "@docs/types";
import { PieDead } from "./PieDead";
import { H2, H3 } from "@docs/Headers";

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
      <H3 id="pie-chart">Pie Chart</H3>
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

      <H3 id="empty-chart">Empty Chart</H3>

      <p>
        If the sum of all chart values equate to zero, the chart will display no
        segments and simply render a circle with a background color of{" "}
        <code>&#8209;&#8209;background&#8209;default</code>:
      </p>

      <PieDead />

      <H3 id="donut-chart">Donut Chart</H3>

      <p>
        Donut charts can also be configured using the <code>innerRadius</code>{" "}
        prop:
      </p>

      <DonutStyles />

      <H3 id="transition-speed">Transition Speed</H3>

      <p>
        To control transition speed, the <code>speed</code> prop can be passed
        into charts. The default speed is <code>1</code> second:
      </p>

      <ChartSpeed />

      <hr className="md" />

      <H2 id="css-variables-used">CSS Variables Used</H2>

      <ul>
        <li>
          <code>--background-default</code>: Default background for empty
          charts.
        </li>
      </ul>
    </>
  );
};
