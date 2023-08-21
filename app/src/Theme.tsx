// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Router } from "./Router";
import { useTheme } from "./contexts/Theme";

// App-wide theme classes are inserted here.
//
// App-specific theming is added to `ThemeProvider`.
// `@polkadot-cloud/react` themes are added to `Entry`.
export const Theme = () => {
  const { mode, theme } = useTheme();

  return (
    <div className={`main theme-${theme} theme-${mode}`}>
      <Router />
    </div>
  );
};
