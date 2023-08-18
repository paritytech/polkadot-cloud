/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Buttons } from "../pages/Buttons";
import { Modal } from "../pages/Modal";
import { GridPage } from "../pages/GridPage";
import { CardPage } from "../pages/CardPage";
import { LoadersPage } from "../pages/LoadersPage";
import { Extensions } from "../pages/Extensions";

export const routes = [
  {
    path: "buttons",
    element: <Buttons />,
  },
  {
    path: "extensions",
    element: <Extensions />,
  },
  {
    path: "grid",
    element: <GridPage />,
  },
  {
    path: "card",
    element: <CardPage />,
  },
  {
    path: "modal",
    element: <Modal />,
  },
  {
    path: "loader",
    element: <LoadersPage />,
  },
];
