/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { MouseEvent } from "react";
import { AnyJson, HPosition } from "./types";

/* Returns ` t` if truthy, or an empty string otherwise. */
export const valEmpty = (t: boolean | string | undefined, v: string) =>
  t ? ` ${v}` : "";

/* Returns ` v` if `t` is truthy, or ` w` otherwise. */
export const valOr = (t: boolean | string | undefined, v: string, w: string) =>
  t ? ` ${v}` : ` ${w}`;

/* Formats mouse handlers for buttons given its props. */
export const onMouseHandlers = (props: AnyJson) => {
  const { onClick, onMouseOver, onMouseMove, onMouseOut } = props;
  return {
    onClick:
      typeof onClick == "function"
        ? (e: MouseEvent<HTMLButtonElement>) => onClick(e)
        : undefined,
    onMouseOver:
      typeof onMouseOver == "function"
        ? (e: MouseEvent<HTMLButtonElement>) => onMouseOver(e)
        : undefined,
    onMouseMove:
      typeof onMouseMove == "function"
        ? (e: MouseEvent<HTMLButtonElement>) => onMouseMove(e)
        : undefined,
    onMouseOut:
      typeof onMouseOut == "function"
        ? (e: MouseEvent<HTMLButtonElement>) => onMouseOut(e)
        : undefined,
  };
};

export const ellipsisFn = (
  str: string,
  amount = 4,
  position: HPosition = "center" as HPosition
) => {
  // having an amount less than 4 is a bit extreme so we default there
  if (amount <= 4) {
    if (position === "left") return ".." + str.slice(-4);
    if (position === "center") return str.slice(0, 4) + "..." + str.slice(-4);
    if (position === "right") return str.slice(0, 4) + "..";
  }
  // if the amount requested is in a "logical" amount - meaning that it can display the address
  // without repeating the same information twice - then go for it;
  if (amount <= str.length / 2 - 3) {
    if (position === "left") return "..." + str.slice(-amount);
    if (position === "center")
      return str.slice(0, amount) + "..." + str.slice(-amount);
    if (position === "right") return str.slice(0, amount) + "...";
  }
  // else, the user has been mistaskenly extreme, so just show the maximum possible amount
  if (position === "left") return "..." + str.slice(-(str.length / 2 - 3));
  if (position === "center")
    return (
      str.slice(0, str.length / 2 - 3) +
      "..." +
      str.slice(-(str.length / 2 - 3))
    );
  if (position === "right") return str.slice(0, str.length / 2 - 3) + "...";
};
