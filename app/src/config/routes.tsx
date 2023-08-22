/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Buttons } from "../docs/Buttons";
import { Loaders } from "../docs/Loaders";
import { Extensions } from "../docs/Extensions";
import { Grid } from "../docs/Grid";
import { Card } from "../docs/Cards";

// TODO: transfer pages to docs
import { Modal } from "../pages/Modal";
import { ReactNode } from "react";

type Routes = {
  name: string;
  path: string;
  element: ReactNode;
}[];

type RouteCategories = ((RouteCategory | RouteCategoryMulti) & {
  name?: string;
})[];

interface RouteCategory {
  path: string;
}

interface RouteCategoryMulti {
  paths: {
    heading?: string;
    paths: string[];
  }[];
}

export const routes: Routes = [
  {
    path: "/",
    name: "Home",
    element: <Buttons />, // Placeholder until we have a landing page.
  },
  {
    path: "buttons",
    name: "Buttons",
    element: <Buttons />,
  },
  {
    path: "extensions",
    name: "Extensions",
    element: <Extensions />,
  },
  {
    path: "grid",
    name: "Grid",
    element: <Grid />,
  },
  {
    path: "card",
    name: "Card",
    element: <Card />,
  },
  {
    path: "modal",
    name: "Modal",
    element: <Modal />,
  },
  {
    path: "loader",
    name: "Loaders",
    element: <Loaders />,
  },
];

export const routeCategories: RouteCategories = [
  {
    path: "buttons",
  },
  {
    path: "extensions",
  },
  {
    path: "loader",
  },
  {
    name: "Layout",
    paths: [
      {
        paths: ["grid", "modal", "card"],
      },
    ],
  },
];

export const nameFromRoute = (path: string): string | undefined =>
  routes?.find((r) => r.path === path)?.name;
