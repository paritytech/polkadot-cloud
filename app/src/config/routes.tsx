/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import { ReactNode } from "react";

import { Buttons } from "../docs/Buttons";
import { Loaders } from "../docs/Loaders";
import { Charts } from "../docs/Charts";
import { Polkicon } from "../docs/Polkicon";
import { Extensions } from "../docs/Extensions";
import { Validators } from "../docs/Validators";
import { Grid } from "../docs/Grid";
import { Card } from "../docs/Cards";
import { Overlay } from "../docs/Overlay";
import { AccountCard } from "../docs/AccountCard";
import { Odometer } from "../docs/Odometer";
import { Modal } from "../docs/Modal";
import { UtilitiesBase } from "../docs/UtilitiesBase";
import { UtilitiesUnit } from "../docs/UtilitiesUnit";
import { Switch } from "../docs/Switch";
import { Textfield } from "../docs/Textfield";
import { Overview } from "../docs/Overview";

type Routes = {
  name: string;
  path: string;
  default?: boolean;
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

// Overview
const introRoutes = [
  {
    path: "overview",
    name: "Overview",
    element: <Overview />,
    default: true,
  },
];

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
    path: "base_utilities",
    name: "Base Utilities",
    element: <UtilitiesBase />,
  },
  {
    path: "unit_utilities",
    name: "Unit Utilities",
    element: <UtilitiesUnit />,
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
    name: "Web3 Extensions",
    element: <Extensions />,
  },
  {
    path: "validators",
    name: "Validator Operators",
    element: <Validators />,
  },
];

const componentsRoutes = [
  {
    path: "polkicon",
    name: "Polkicon",
    element: <Polkicon />,
  },
  {
    path: "odometer",
    name: "Odometer",
    element: <Odometer />,
  },
  {
    path: "overlay",
    name: "Overlay",
    element: <Overlay />,
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
    element: <Overview />, // Until we have a landing page
  },
  ...introRoutes,
  ...assetsRoutes,
  ...componentsRoutes,
  ...componentsLayoutRoutes,
  ...componentsInputRoutes,
  ...recipesRoutes,
  ...utilsRoutes,
];

export const routeCategories: RouteCategories = [
  {
    name: "Getting started",
    paths: [
      {
        paths: ["overview"],
      },
    ],
  },
  {
    name: "Data & Assets",
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
        paths: ["polkicon"],
      },
      {
        paths: ["odometer"],
      },
      {
        paths: ["overlay"],
      },
      {
        paths: ["charts"],
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
        paths: ["base_utilities", "unit_utilities"],
      },
    ],
  },
  {
    name: "Experimental",
    paths: [
      {
        heading: "Components",
        paths: ["loader", "modal", "switch", "textfield"],
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

export const isDefaultRoute = (path: string): boolean =>
  !!routes?.find((r) => r.default === true && r.path === path);
