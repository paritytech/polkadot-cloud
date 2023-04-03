// @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* Returns ` t` if truthy, or an empty string otherwise. */
export const valEmpty = (t: boolean | string | undefined, v: string) =>
  t ? ` ${v}` : "";

/* Returns ` v` if `t` is truthy, or ` w` otherwise. */
export const valOr = (t: boolean | string | undefined, v: string, w: string) =>
  t ? ` ${v}` : ` ${w}`;
