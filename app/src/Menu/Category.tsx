/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { RouteCategoryMulti, nameFromRoute } from "../config/routes";

interface Props {
  rest: RouteCategoryMulti;
  i: number;
}

export const Category = ({ rest, i }: Props) => {
  const { pathname } = useLocation();

  return (
    <section>
      {rest.paths.map(({ heading, paths }, j) => (
        <Fragment key={`nav_${i}_heading_${j}`}>
          {heading ? (
            <h4
              style={{
                margin: "1.25rem 0 0.75rem 0",
                fontWeight: "bold",
              }}
            >
              {heading}
            </h4>
          ) : (
            <div className="no-heading" />
          )}

          {paths.map((path, k) => (
            <Link
              key={`nav_${i}_heading_${j}_path_${k}`}
              className={`link${pathname === `/${path}` ? " selected" : ``}`}
              to={`/${path}`}
            >
              {nameFromRoute(path)}
            </Link>
          ))}
        </Fragment>
      ))}
    </section>
  );
};
