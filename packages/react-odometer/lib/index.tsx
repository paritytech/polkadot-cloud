/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { useEffect, useRef, type FC } from "react";
import { ReactOdometerProps } from "./types";
import Odometer from "./odometer.js";
import "../styles/index.css";

export const ReactOdometer: FC<ReactOdometerProps> = ({ duration, value }) => {
  const node = useRef<HTMLDivElement>(null);
  const odometer = useRef<Odometer>();

  useEffect(() => {
    odometer.current = new Odometer({
      el: node.current,
      value,
      duration,
      format: "(ddd).dd",
      theme: "minimal",
    });
  }, []);

  useEffect(() => {
    if (odometer.current?.value !== value) {
      odometer.current?.update(value);
    }
  }, [value]);

  return <div ref={node} />;
};
