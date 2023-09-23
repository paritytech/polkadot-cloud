/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import "@polkadot-cloud/core/css/base/structure/Pie/index.css";

export type PieProps = {
  perc?: number;
};

export const Pie = ({ perc = 60 }: PieProps) => {
  return (
    <div
      style={{
        width: "inherit",
        height: "inherit",
      }}
    >
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
              background: `conic-gradient(var(--accent-color-primary) ${perc}%,
                var(--button-secondary-background) ${perc}%)`,
            }}
          />
        </foreignObject>
      </svg>
    </div>
  );
};
