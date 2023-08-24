/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { LoaderProps } from "../../base/types";
import { Cube } from "../Cube";
import { Dots } from "../Dots";
import { Line } from "../Line";

export const Loader = ({ type, text }: LoaderProps) => {
  switch (type) {
    case "cube":
      return <Cube />;
    case "dots":
      return <Dots />;
    case "line":
    default:
      return <Line text={text} />;
  }
};
