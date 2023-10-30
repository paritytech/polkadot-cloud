/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

// eslint-disable-next-line
export type AnyJson = any;

// eslint-disable-next-line
export type AnyObject = any;

export enum EvalMessages {
  GIBBERISH = "Input is not correct. Use numbers, floats or expression (e.g. 1k, 1.3m)",
  ZERO = "You cannot send 0 funds",
  SUCCESS = "",
  SYMBOL_ERROR = "Provided symbol is not correct",
  GENERAL_ERROR = "Check your input. Something went wrong",
}
