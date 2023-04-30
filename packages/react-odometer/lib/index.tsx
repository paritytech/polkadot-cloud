/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import type { FC } from "react";
import { useEffect, useRef } from "react";
import Odometer from "./odometer";
import type { ReactOdometerProps } from "./types";
import "../styles/index.scss";

export const ReactOdometer: FC<ReactOdometerProps> = ({
  duration,
  value,
  decimals,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const odometer = useRef<Odometer>(null);
  const instantiated = useRef<boolean>(false);

  useEffect(() => {
    if (!instantiated.current && ref.current) {
      instantiated.current = true;

      odometer.current = new Odometer({
        el: ref.current,
        value,
        duration,
        format: `(,ddd).${"d".repeat(decimals || 12)}`,
        theme: "minimal",
      });
    }
  }, [ref.current]);

  useEffect(() => {
    if (odometer.current?.value !== value) {
      odometer.current?.update(value);
    }
  }, [value]);

  return (
    <>
      <div ref={ref} />
    </>
  );
};
