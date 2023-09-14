/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { CSSProperties, ReactNode } from "react";
import { useTheme } from "../../../contexts/Theme";
// Import each supported theme here.
import "@packages/cloud-core/dist/theme/polkadot-relay/index.css";
import "@packages/cloud-core/dist/theme/kusama-relay/index.css";
import "@packages/cloud-core/dist/theme/westend-relay/index.css";
import "@packages/cloud-core/dist/theme/xcm/index.css";
// Import the base cloud-core styles to ensure the theme styles are applied instead of doc styles.
import "@packages/cloud-core/dist/css/styles/index.css";

export const Demo = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  const { theme, mode, setTheme } = useTheme();

  const themes = [
    ["Polkadot", "polkadot-relay"],
    ["Kusama", "kusama-relay"],
    ["Westend", "westend-relay"],
    ["XCM", "xcm"],
  ];

  return (
    <>
      <div
        className={`demo theme-${theme} theme-${mode}${
          className ? ` ${className}` : ``
        }`}
        style={style ? { ...style } : undefined}
      >
        {children}
      </div>
      <div className="demo-controls">
        {themes.map(([name, key]) => (
          <button
            key={`theme_${key}`}
            className={`${theme === key ? " active" : ``}`}
            onClick={() => setTheme(key)}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
};
