/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import { ReactNode } from "react";

import { Buttons } from "../docs/Buttons";
import { Loaders } from "../docs/Loaders";
import { Icons } from "../docs/Icons";
import { Extensions } from "../docs/Extensions";
import { Grid } from "../docs/Grid";
import { Card } from "../docs/Cards";
import { AccountCard } from "../docs/AccountCard";
import { Odometer } from "../docs/Odometer";
import { Modal } from "../docs/Modal";
import { Utilities } from "../docs/Utilities";

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

// recipes
const recipesRoutes = [
  {
    path: "account_card",
    name: "Account card",
    element: <AccountCard />,
  },
];

// utils
const utilsRoutes = [
  {
    path: "utilities",
    name: "Utilities",
    element: <Utilities />,
  },
];

// Layout Components
const componentsLayoutRoutes = [
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
];

// Input Components
const componentsInputRoutes = [
  {
    path: "buttons",
    name: "Buttons",
    element: <Buttons />,
  },
];

const assetsRoutes = [
  {
    path: "extensions",
    name: "Extensions",
    element: <Extensions />,
  },
];

const componentsRoutes = [
  {
    path: "icons",
    name: "PolkIcon",
    element: <Icons />,
  },
  {
    path: "odometer",
    name: "Odometer",
    element: <Odometer />,
  },
  {
    path: "loader",
    name: "Loaders",
    element: <Loaders />,
  },
];

export const routes: Routes = [
  {
    path: "/",
    name: "Home",
    element: <Buttons />, // Placeholder until we have a landing page
  },
  // Assets
  ...assetsRoutes,
  // Components
  ...componentsRoutes,
  ...componentsLayoutRoutes,
  ...componentsInputRoutes,
  // Recipes
  ...recipesRoutes,
  // Utils
  ...utilsRoutes,
];

export const routeCategories: RouteCategories = [
  {
    name: "Assets",
    paths: [
      {
        paths: ["extensions"],
      },
    ],
  },
  {
    name: "Components",
    paths: [
      {
        paths: ["icons"],
      },
      {
        paths: ["odometer"],
      },
      {
        paths: ["modal"],
      },
      {
        paths: ["loader"],
      },
      {
        heading: "Inputs",
        paths: ["buttons"],
      },
      {
        heading: "Layout",
        paths: ["grid", "card"],
      },
    ],
  },
  {
    name: "Recipes",
    paths: [
      {
        paths: ["account_card"],
      },
    ],
  },

  {
    name: "Utilities",
    paths: [
      {
        paths: ["utilities"],
      },
    ],
  },
];

export const nameFromRoute = (path: string): string | undefined =>
  routes?.find((r) => r.path === path)?.name;
