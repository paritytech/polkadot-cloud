/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import { useState } from "react";
import "./index.scss";

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
  perc = 60,
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
              ${wrappedTitle ? "tooltip-wrap " : ""}
              ${titlePosition + " "}
              ${
                fixedTitle ? "tooltip-show " : showTitle ? "tooltip-show " : ""
              }`}
            style={{
              maxWidth: `${size * 2}rem`,
            }}
          >
            {title}
          </div>
        )}
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
                borderRadius: "10rem",
                background: `conic-gradient(var(--network-color-primary) ${perc}%,
                var(--button-secondary-background) ${perc}%)`,
              }}
            />
          </foreignObject>
        </svg>
      </div>
    </>
  );
};
