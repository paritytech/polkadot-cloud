/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import { ReactNode } from "react";

import { Buttons } from "../docs/Buttons";
import { Loaders } from "../docs/Loaders";
import { Charts } from "../docs/Charts";
import { Icons } from "../docs/Icons";
import { Extensions } from "../docs/Extensions";
import { Validators } from "../docs/Validators";
import { Grid } from "../docs/Grid";
import { Card } from "../docs/Cards";
import { AccountCard } from "../docs/AccountCard";
import { Odometer } from "../docs/Odometer";
import { Modal } from "../docs/Modal";
import { Utilities } from "../docs/Utilities";
import { Switch } from "../docs/Switch";
import { Textfield } from "../docs/Textfield";

type Routes = {
  name: string;
  path: string;
  element: ReactNode;
}[];

type RouteCategories = ((RouteCategoryPath | RouteCategoryMulti) & {
  name?: string;
})[];

interface RouteCategoryPath {
  path: string;
}

export interface RouteCategoryMulti {
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
    name: "Cloud Utils",
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
  {
    path: "switch",
    name: "Switch",
    element: <Switch />,
  },
  {
    path: "textfield",
    name: "Textfield",
    element: <Textfield />,
  },
];

const assetsRoutes = [
  {
    path: "extensions",
    name: "Extensions",
    element: <Extensions />,
  },
  {
    path: "validators",
    name: "Validators",
    element: <Validators />,
  },
];

const componentsRoutes = [
  {
    path: "icons",
    name: "Polkicon",
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
  {
    path: "charts",
    name: "Charts",
    element: <Charts />,
  },
];

export const routes: Routes = [
  {
    path: "/",
    name: "Home",
    element: <Extensions />, // Placeholder until we have a landing page
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
      {
        paths: ["validators"],
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
        heading: "Inputs",
        paths: ["buttons"],
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
  {
    name: "Experimental",
    paths: [
      {
        heading: "Components",
        paths: ["charts", "loader", "modal", "switch", "textfield"],
      },
      {
        heading: "Layout",
        paths: ["card", "grid"],
      },
      {
        heading: "Recipes",
        paths: ["account_card"],
      },
    ],
  },
];

export const nameFromRoute = (path: string): string | undefined =>
  routes?.find((r) => r.path === path)?.name;
