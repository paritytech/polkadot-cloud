/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import { ComponentBaseWithClassName } from "../../../utils/types";
import { Pie, PieProps } from "./Pie";

export type ChartType = "pie";

export type Props = ComponentBaseWithClassName & {
  // the type of the chart that need to be imported.
  type?: ChartType;
} & PieProps;

export const Chart = (props: Props) => {
  const { type } = props;

  switch (type) {
    case "pie":
    default: {
      const p = props as PieProps;
      return <Pie {...p} />;
    }
  }
};
