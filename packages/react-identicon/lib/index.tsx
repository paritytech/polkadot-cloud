/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { useCallback } from "react";
import classNames from "classnames";
import {
  Circle,
  getCircleXY,
  OUTER_CIRCLE,
  renderCircle,
  Z,
} from "./utils/circles";
import { getColors } from "./utils/colors";

export interface IdenticonProps {
  size: number;
  disableCursorCopy?: boolean;
  disableClipboardCopy?: boolean;
  colors?: string[];
  value: string;
}

export const Identicon = ({
  size,
  value,
  disableCursorCopy = false,
  disableClipboardCopy = false,
  colors: initialColors,
}: IdenticonProps) => {
  const xy = getCircleXY();

  const defaultColors =
    initialColors || new Array<string>(xy.length).fill("#ddd");

  const colors = value ? initialColors || getColors(value) : defaultColors;

  const copyToClipboard = useCallback(() => {
    if (disableClipboardCopy) {
      return;
    }
    if (navigator) {
      navigator.clipboard.writeText(value);
    }
  }, [value]);

  return (
    <div
      onClick={copyToClipboard}
      className={classNames({
        "cursor-copy": !(disableCursorCopy || disableClipboardCopy),
      })}
    >
      <svg
        height={size}
        id={value}
        name={value}
        viewBox="0 0 64 64"
        width={size}
      >
        {[OUTER_CIRCLE]
          .concat(
            xy.map(
              ([cx, cy], index): Circle => ({
                cx,
                cy,
                fill: colors[index],
                r: Z,
              })
            )
          )
          .map(renderCircle)}
      </svg>
    </div>
  );
};
