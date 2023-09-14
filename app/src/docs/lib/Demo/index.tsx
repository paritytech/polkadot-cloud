/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { CSSProperties, ReactNode } from "react";
import { useTheme } from "app/src/contexts/Theme";
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
  const { theme, mode } = useTheme();

  return (
    <div
      className={`demo theme-${theme} theme-${mode}${
        className ? ` ${className}` : ``
      }`}
      style={style ? { ...style } : undefined}
    >
      {children}
    </div>
  );
};
