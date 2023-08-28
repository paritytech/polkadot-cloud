/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useEffect, useState } from "react";

interface Props {
  value: number | string;
}

export const Odometer = (props: Props) => {
  // Store the current odometer value in state.
  const [value, setValue] = useState<string>(String(props.value));

  // Store the digits of the current value
  const [digits, setDigits] = useState<string[]>([]);

  // When a new value is provided, update the odometer value.
  useEffect(() => {
    // TODO: calculate new digits
    const newDigits = value.toString().split("");

    setDigits(newDigits);

    // TODO: determine animations (up or down) (digits to animate).

    setValue(value);
  }, [value]);

  return (
    <div className="odometer">
      {digits.map((d, i) => {
        return (
          <span key={`digit_${i}`} className={`digit digit_${i}`}>
            {d}
          </span>
        );
      })}
    </div>
  );
};
