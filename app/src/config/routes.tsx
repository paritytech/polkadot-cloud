/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Buttons } from "../pages/Buttons";
import { Modal } from "../pages/Modal";
import { GridPage } from "../pages/GridPage";
import { CardPage } from "../pages/CardPage";
import { LoadersPage } from "../pages/LoadersPage";
import { Extensions } from "../pages/Extensions";
import { ReactNode } from "react";

type Routes = {
  name: string;
  path: string;
  element: ReactNode;
}[];

type RouteCategories = ((RouteCategory | RouteCategoryMulti) & {
  name: string;
})[];

interface RouteCategory {
  path: string;
}

interface RouteCategoryMulti {
  paths: {
    heading: string;
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
    element: <GridPage />,
  },
  {
    path: "card",
    name: "Card",
    element: <CardPage />,
  },
  {
    path: "modal",
    name: "Modal",
    element: <Modal />,
  },
  {
    path: "loader",
    name: "Loader",
    element: <LoadersPage />,
  },
];

export const routeCategories: RouteCategories = [
  {
    name: "Core UI",
    paths: [
      {
        heading: "Layout",
        paths: ["grid", "modal", "card"],
      },
      {
        heading: "Interaction",
        paths: ["buttons"],
      },
    ],
  },
  {
    name: "Loaders",
    path: "loader",
  },
  {
    name: "Extensions",
    path: "extensions",
  },
];

export const nameFromRoute = (path: string): string | undefined =>
  routes?.find((r) => r.path === path)?.name;
