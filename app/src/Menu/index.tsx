/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { nameFromRoute, routeCategories } from "../config/routes";
import "../styles/menu.scss";
import { Category } from "./Category";

export const Menu = () => {
  const { pathname } = useLocation();
  const BaseUri = import.meta.env.VITE_BASE_URI;

  return (
    <div className="menu">
      {routeCategories.map(({ name, ...rest }, i) => (
        <Fragment key={`nav_${i}`}>
          {"paths" in rest ? (
            <>
              <Category name={name} rest={rest} i={i} />
            </>
          ) : (
            <>
              <Link
                className={`link lg${
                  pathname === `${BaseUri}${rest.path}` ? ` selected` : ``
                }`}
                to={`${BaseUri}${rest.path}`}
              >
                {nameFromRoute(rest.path)}
              </Link>
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
};
