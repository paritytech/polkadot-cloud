/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useEffect, useState, createRef, MutableRefObject } from "react";
import "@polkadot-cloud/core/css/complex/Odometer/index.css";
import { Direction, Props, Status } from "./types";

export const Odometer = ({
  value,
  wholeColor = "var(--text-color-primary)",
  decimalColor = "var(--text-color-tertiary)",
}: Props) => {
  // Store all possible digits.
  const [allDigits] = useState([
    "dot",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);

  // Store the digits of the current value.
  const [digits, setDigits] = useState<string[]>([]);

  // Store digits of the previous value.
  const [prevDigits, setPrevDigits] = useState<string[]>([]);

  // Store the status of the odometer (transitioning or stable).
  const [status, setStatus] = useState<Status>("inactive");

  // Store whether component has iniiialized.
  const [initialized, setInitialized] = useState<boolean>(false);

  // Store ref of the odometer.
  const [odometerRef] = useState(createRef<HTMLSpanElement>());

  // Store refs of each digit.
  const [digitRefs, setDigitRefs] = useState<
    MutableRefObject<HTMLSpanElement>[]
  >([]);

  // Store refs of each `all` digit.
  const [allDigitRefs, setAllDigitRefs] = useState<
    Record<string, MutableRefObject<HTMLSpanElement>>
  >({});

  // Phase 0: populate `allDigitRefs`.
  useEffect(() => {
    const all: Record<
      string,
      MutableRefObject<HTMLSpanElement>
    > = Object.fromEntries(
      Object.values(allDigits).map((v) => [`d_${v}`, createRef()])
    );

    setAllDigitRefs(all);
  }, []);

  // Phase 1: new digits and refs are added to the odometer.
  useEffect(() => {
    if (Object.keys(allDigitRefs)) {
      const newDigits = value
        .toString()
        .split("")
        .map((v) => (v === "." ? "dot" : v));

      setDigits(newDigits);

      if (!initialized) {
        setInitialized(true);
      } else {
        setStatus("new");
        setPrevDigits(digits);
      }
      setDigitRefs(Array(newDigits.length).fill(createRef()));
    }
  }, [value]);

  // Phase 2: set up digit transition.
  useEffect(() => {
    if (status === "new" && !digitRefs.find((d) => d.current === null)) {
      setStatus("transition");
    }
  }, [status, digitRefs]);

  const odometerCurrent: Element = odometerRef?.current;
  let lineHeight = odometerCurrent
    ? window.getComputedStyle(odometerCurrent).lineHeight
    : "inherit";

  // Fallback line height to `1.1rem` if `normal`.
  lineHeight = lineHeight === "normal" ? "1.1rem" : lineHeight;

  // Track whether decimal point has been found.
  let foundDecimal = false;

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
          if (d === "dot") foundDecimal = true;

          // If transitioning, get digits needed to animate.
          let childDigits = null;
          if (status === "transition") {
            const digitsToAnimate = [];
            const digitIndex = allDigits.indexOf(digits[i]);
            const prevDigitIndex = allDigits.indexOf(prevDigits[i]);
            const difference = Math.abs(digitIndex - prevDigitIndex);
            const delay = `${0.02 * (digits.length - i - 1)}s`;
            const direction: Direction =
              digitIndex === prevDigitIndex ? "none" : "down";
            const animClass = `slide-${direction}-${difference} `;

            // Push current prev digit to stop of stack.
            digitsToAnimate.push(prevDigits[i]);

            // If transitioning between two digits, animate all digits in between.
            if (digitIndex < prevDigitIndex) {
              digitsToAnimate.push(
                ...Array.from(
                  { length: difference },
                  (_, k) => allDigits[prevDigitIndex - k - 1]
                )
              );
            } else {
              digitsToAnimate.push(
                ...Array.from(
                  { length: difference },
                  (_, k) => allDigits[k + prevDigitIndex + 1]
                )
              );
            }

            childDigits = (
              <span
                className={`digit-group`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  animationName: direction === "none" ? undefined : animClass,
                  animationDuration: direction === "none" ? undefined : "0.75s",
                  animationFillMode: "forwards",
                  animationTimingFunction: "cubic-bezier(0.1, 1, 0.2, 1)",
                  animationDelay: delay,
                  color: foundDecimal ? decimalColor : wholeColor,
                }}
              >
                {digitsToAnimate.map((c, j) => (
                  <span
                    key={`child_digit_${j}`}
                    className="digit child"
                    style={{
                      top: j === 0 ? 0 : `${100 * j}%`,
                      height: lineHeight,
                      lineHeight,
                    }}
                  >
                    {c === "dot" ? "." : c}
                  </span>
                ))}
              </span>
            );

            // console.log(prevDigits[i], digits[i]);
            // console.log(prevDigitIndex, digitIndex);
            // console.log(digitsToAnimate);
            // console.log(direction);
            // console.log(animClass);
            // console.log("---");
          }

          return (
            <span
              key={`digit_${i}`}
              ref={digitRefs[i]}
              className={`digit parent`}
              style={{
                color: foundDecimal ? decimalColor : wholeColor,
                height: lineHeight,
                lineHeight,
                paddingRight:
                  status === "transition"
                    ? `${allDigitRefs[`d_${d}`]?.current?.offsetWidth}px`
                    : "0",
              }}
            >
              {status === "inactive" ? (
                <span
                  className="digit child"
                  style={{
                    top: 0,
                    height: lineHeight,
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
