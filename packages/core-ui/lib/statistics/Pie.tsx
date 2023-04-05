/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */
import { useEffect, useState } from "react";

export type PieProps = {
  title?: string;
  titlePosition?: "top" | "right" | "bottom" | "left";
  wrappedTitle?: boolean;
  fixedTitle?: boolean;
  size?: number;
  perc?: number;
};

export const Pie = ({
  title,
  titlePosition = "top",
  wrappedTitle = false,
  fixedTitle = false,
  size = 5,
  perc = 42,
}: PieProps) => {
  const [showTitle, setShowTitle] = useState<boolean>(false);

  return (
    <>
      <div
        onMouseEnter={() => setShowTitle(true)}
        onMouseLeave={() => setShowTitle(false)}
        style={{
          width: `${size}rem`,
          height: title ? `${size + 2}rem` : `${size}rem`,
        }}
      >
        {title && (
          <div
            className={`tooltip 
              ${wrappedTitle ? "tooltipWrap " : ""}
              ${titlePosition + " "}
              ${fixedTitle ? "tooltipShow " : showTitle ? "tooltipShow " : ""}`}
            style={{
              maxWidth: `${size * 2}rem`,
            }}
          >
            {title}
          </div>
        )}
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            borderRadius: "50%",
            border: "1px solid var(--network-color-primary)",
          }}
        >
          <foreignObject
            x="0"
            y="0"
            width="100"
            height="100"
            clipPath="url(#hole)"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `conic-gradient(var(--network-color-primary) ${perc}%,
                var(--button-primary-background) ${perc}%)`,
              }}
            />
          </foreignObject>
        </svg>
      </div>
    </>
  );
};
