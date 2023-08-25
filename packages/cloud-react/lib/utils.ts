/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { MouseEvent } from "react";
import { AnyJson } from "./types";

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
