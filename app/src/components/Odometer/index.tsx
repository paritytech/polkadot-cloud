/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useEffect, useState, createRef, MutableRefObject } from "react";

interface Props {
  value: number | string;
}

type Status = "new" | "transition" | "stable";

export const Odometer = (props: Props) => {
  // Store all possible digits.
  const [allDigits] = useState([
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
    "dot",
  ]);

  // Store the digits of the current value.
  const [digits, setDigits] = useState<string[]>([]);

  // Store digits of the previous value.
  const [prevDigits, setPrevDigits] = useState<string[]>([]);

  // Store the status of the odometer (transitioning or stable).
  const [status, setStatus] = useState<Status>("stable");

  // Store whether component has iniiialized.
  const [initialized, setInitialized] = useState<boolean>(false);

  // Store ref of the odometer.
  const [odometerRef] = useState(createRef<HTMLSpanElement>());

  // Store refs of each digit
  const [digitRefs, setDigitRefs] = useState<
    MutableRefObject<HTMLSpanElement>[]
  >([]);

  // Store refs of each `all` digit
  const [allDigitRefs, setAllDigitRefs] = useState<
    Record<string, MutableRefObject<HTMLDivElement>>
  >({});

  // Phase 0: populate `allDigitRefs`
  useEffect(() => {
    const all = {};
    Object.values(allDigits).forEach((v) => {
      all[`d_${v}`] = createRef();
    });
    setAllDigitRefs(all);
  }, []);

  // Phase 1: new digits and refs are added to the odometer.
  useEffect(() => {
    if (Object.keys(allDigitRefs)) {
      const newDigits = props.value
        .toString()
        .split("")
        .map((v) => (v === "." ? "dot" : v));

      console.log(props.value);
      setDigits(newDigits);

      if (!initialized) {
        setInitialized(true);
      } else {
        setStatus("new");
        setPrevDigits(digits);
      }
      setDigitRefs(Array(newDigits.length).fill(createRef()));
    }
  }, [props.value]);

  // Phase 2: set up digit animation.
  useEffect(() => {
    if (status === "new" && !digitRefs.find((d) => d.current === null)) {
      setStatus("transition");
      setTimeout(() => setStatus("stable"), 3000);
    }
  }, [status, digitRefs]);

  const height = odometerRef?.current?.offsetHeight || "inherit";

  const odometerCurrent: Element = odometerRef?.current;
  const lineHeight = odometerCurrent
    ? window.getComputedStyle(odometerCurrent).lineHeight
    : "inherit";

  console.log(status);

  return (
    <span className="odometer">
      {allDigits.map((d, i) => (
        <span
          key={`template_digit_${i}`}
          ref={allDigitRefs[`d_${d}`]}
          className="t-digit"
        >
          {d === "dot" ? "." : d}
        </span>
      ))}
      <span className="inner" ref={odometerRef}>
        {digits.map((d, i) => {
          // If transitioning, get digits needed to animate.
          let childDigits = null;
          if (status === "transition") {
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
              digitsToAnimate.push(prevDigits[i]);

              // If transitioning between a . or undefined, only animate the current digit.
              if (
                ["dot", undefined].includes(prevDigits[i]) ||
                ["dot", undefined].includes(digits[i])
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
                  className="digit child"
                  style={{
                    position: "absolute",
                    [posKey]: j === 0 ? "0px" : `${100 * j}%`,
                    left: "0px",
                    height: odometerRef.current?.offsetHeight,
                    lineHeight,
                  }}
                >
                  {c === "dot" ? "." : c}
                </span>
              );
            });

            // console.log(prevDigits[i], digits[i]);
            // console.log(digitsToAnimate);
            // console.log(direction);
            // console.log("---");
          }

          return (
            <span
              key={`digit_${i}`}
              ref={digitRefs[i]}
              className={`digit parent`}
              style={{
                height,
                lineHeight,
                paddingRight:
                  status === "transition"
                    ? `${allDigitRefs[`d_${d}`]?.current?.offsetWidth}px`
                    : "0",
              }}
            >
              {status === "stable" ? (
                <span
                  className="digit"
                  style={{
                    lineHeight,
                  }}
                >
                  {d === "dot" ? "." : d}
                </span>
              ) : null}
              {status === "transition" && childDigits}
            </span>
          );
        })}
      </span>
    </span>
  );
};
