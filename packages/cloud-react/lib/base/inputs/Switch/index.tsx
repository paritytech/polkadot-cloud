/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBaseWithClassName } from "../../../types";

import "@polkadot-cloud/core/css/base/inputs/Switch/index.css";

export type SwitchProps = ComponentBaseWithClassName;

/**
 * @name SwitchProps
 * @description Switch style used within the main interface of dashboards.
 */
// eslint-disable-next-line no-empty-pattern
export const Switch = ({}: SwitchProps) => (
  <>
    <input
      className="base-inputs-switch-checkbox"
      id={`base-inputs-switch-new`}
      type="checkbox"
    />
    <label
      className="base-inputs-switch-label"
      htmlFor={`base-inputs-switch-new`}
    >
      <span className={`base-inputs-switch-button`} />
    </label>
  </>
);
