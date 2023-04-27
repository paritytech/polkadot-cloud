/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { useEffect, useRef, type FC } from "react";
import { ReactOdometerProps } from "./types";
import Odometer from "odometer";
import "../styles/index.css";

export const ReactOdometer: FC<ReactOdometerProps> = ({ duration, value }) => {
  const node = useRef<HTMLDivElement>(null);
  const odometer = useRef<any>();

  useEffect(() => {
    odometer.current = new Odometer({
      el: node.current,
      value,
      duration,
      format: "",
      theme: "minimal",
    });
  }, []);

  useEffect(() => {
    odometer.current?.update(value);
  }, [value]);

  return <div ref={node} />;
};
