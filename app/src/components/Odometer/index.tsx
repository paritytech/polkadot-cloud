/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useEffect, useState, createRef, MutableRefObject } from "react";

interface Props {
  value: number | string;
}

type Status = "new" | "transition" | "stable";

export const Odometer = (props: Props) => {
  // Store the digits of the current value.
  const [digits, setDigits] = useState<string[]>([]);

  // Store digits of the previous value.
  const [prevDigits, setPrevDigits] = useState<string[]>([]);

  // Store the status of the odometer (transitioning or stable).
  const [status, setStatus] = useState<Status>("stable");

  // Store whether component has iniiialized.
  const [initialized, setInitialized] = useState<boolean>(false);

  // Store refs of each digit
  const [digitRefs, setDigitRefs] = useState<
    MutableRefObject<HTMLSpanElement>[]
  >([]);

  // Phase 1: new digits and refs are added to the odometer.
  useEffect(() => {
    const newDigits = props.value.toString().split("");
    setDigits(newDigits);

    if (!initialized) {
      setInitialized(true);
    } else {
      setStatus("new");
      setPrevDigits(digits);
    }
    setDigitRefs(Array(newDigits.length).fill(createRef()));
  }, [props.value]);

  // Phase 2: set up digit animation.
  useEffect(() => {
    if (status === "new" && !digitRefs.find((d) => d.current === null)) {
      setStatus("transition");
      setTimeout(() => setStatus("stable"), 10000);
    }
  }, [status, digitRefs]);

  const allDigits = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    undefined,
  ];

  return (
    <span className="odometer">
      {digits.map((d, i) => {
        // If transitioning, get digits needed to animate.
        let digitHeight: string | number = "inherit";
        let childDigits = null;
        if (status === "transition") {
          digitHeight = digitRefs[i]?.current?.offsetHeight;

          let digitsToAnimate = [];
          const digitIndex = allDigits.indexOf(digits[i]);
          const prevDigitIndex = allDigits.indexOf(prevDigits[i]);
          const difference = Math.abs(digitIndex - prevDigitIndex);
          const direction =
            digitIndex > prevDigitIndex
              ? "up"
              : digitIndex < prevDigitIndex
              ? "down"
              : "none";

          if (direction !== "none") {
            // If transitioning between a . or undefined, only animate the current digit.
            if (
              [".", undefined].includes(prevDigits[i]) ||
              [".", undefined].includes(digits[i])
            ) {
              digitsToAnimate = [digits[i]];
            } else {
              // If transitioning between two digits, animate all digits in between.
              if (digitIndex < prevDigitIndex) {
                digitsToAnimate = Array.from(
                  { length: difference },
                  (_, k) => allDigits[prevDigitIndex - k - 1]
                );
              } else {
                digitsToAnimate = Array.from(
                  { length: difference },
                  (_, k) => allDigits[k + prevDigitIndex + 1]
                );
              }
            }
          }

          childDigits = digitsToAnimate.map((c, j) => {
            const posKey = direction === "up" ? "bottom" : "top";
            return (
              <span
                key={`child_digit_${j}`}
                className="digit"
                style={{
                  position: "absolute",
                  [posKey]: `${100 * (j + 1)}%`,
                  left: 0,
                  height: digitHeight,
                }}
              >
                {c}
              </span>
            );
          });

          console.log(prevDigits[i], digits[i]);
          console.log(digitsToAnimate);
          console.log(direction);
          console.log("---");
        }

        return (
          <span
            key={`digit_${i}`}
            ref={digitRefs[i]}
            className={`digit digit_${i}`}
          >
            {status === "transition" && childDigits}
            {status === "stable" ? d : prevDigits[i]}
          </span>
        );
      })}
    </span>
  );
};
