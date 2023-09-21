// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Router } from "./Router";
import { useTheme } from "./contexts/Theme";

// App-wide theme classes are inserted here.
//
// App-specific theming is added to `ThemeProvider`.
// `@polkadot-cloud/react` themes are added to `Entry`.
export const Theme = () => {
  const { mode } = useTheme();

  return (
    <div className={`main theme-cloud cloud-theme-${mode}`}>
      <Router />
    </div>
  );
};
