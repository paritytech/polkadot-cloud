/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import { ReactNode } from "react";

import { Buttons } from "../docs/Components/Buttons";
import { Loaders } from "../docs/Experimental/Loaders";
import { Charts } from "../docs/Components/Charts";
import { Polkicon } from "../docs/Components/Polkicon";
import { Extensions } from "../docs/Assets/Extensions";
import { Validators } from "../docs/Assets/Validators";
import { Grid } from "../docs/Experimental/Grid";
import { Card } from "../docs/Experimental/Cards";
import { Overlay } from "../docs/Components/Overlay";
import { AccountCard } from "../docs/Experimental/AccountCard";
import { ModalConnect } from "../docs/Experimental/Connect/Modal";
import { Odometer } from "../docs/Components/Odometer";
import { Modal } from "../docs/Experimental/Modal";
import { UtilitiesBase } from "../docs/Utilities/Base";
import { UtilitiesUnit } from "../docs/Utilities/Unit";
import { Switch } from "../docs/Experimental/Switch";
import { Textfield } from "../docs/Experimental/Textfield";
import { Overview } from "../docs/GettingStarted/Overview";
import { Installation } from "../docs/GettingStarted/Installation";
import { UsingThemes } from "../docs/GettingStarted/UsingThemes";
import { ExtensionsProvider } from "../docs/Experimental/Connect/ExtensionsProvider";
import { ExtensionAccountsProvider } from "../docs/Experimental/Connect/ExtensionAccountsProvider";

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

// Getting started
const gettingStartedRoutes = [
  {
    path: "overview",
    name: "Overview",
    element: <Overview />,
    default: true,
  },
  {
    path: "installation",
    name: "Installation",
    element: <Installation />,
  },
  {
    path: "using-themes",
    name: "Using Themes",
    element: <UsingThemes />,
  },
];

// recipes
const recipesRoutes = [
  {
    path: "account-card",
    name: "Account card",
    element: <AccountCard />,
  },
  {
    path: "modal-connect",
    name: "Modal Connect",
    element: <ModalConnect />,
  },
];

// utils
const utilsRoutes = [
  {
    path: "base-utilities",
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
    path: "extensions-provider",
    name: "Extensions",
    element: <ExtensionsProvider />,
  },
  {
    path: "extension-accounts-provider",
    name: "Extension Accounts",
    element: <ExtensionAccountsProvider />,
  },
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
  ...gettingStartedRoutes,
  ...assetsRoutes,
  ...componentsRoutes,
  ...componentsLayoutRoutes,
  ...componentsInputRoutes,
  ...recipesRoutes,
  ...utilsRoutes,
];

export const routeCategories: RouteCategories = [
  {
    name: "Getting Started",
    paths: [
      {
        paths: ["overview"],
      },
      {
        paths: ["installation"],
      },
      {
        paths: ["using-themes"],
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
        heading: "Connect",
        paths: ["extensions-provider", "extension-accounts-provider"],
      },
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
        paths: ["base-utilities", "unit_utilities"],
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
        paths: ["account-card", "modal-connect"],
      },
    ],
  },
];

export const nameFromRoute = (path: string): string | undefined =>
  routes?.find((r) => r.path === path)?.name;

export const isDefaultRoute = (path: string): boolean =>
  !!routes?.find((r) => r.default === true && r.path === path);
