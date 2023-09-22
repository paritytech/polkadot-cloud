/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Fragment } from "react";
import { Separator } from "@packages/cloud-react/lib/base/structure/Separator";
import { Link, useLocation } from "react-router-dom";
import { nameFromRoute, routeCategories } from "./config/routes";
import "./styles/menu.scss";

export const Menu = () => {
  const { pathname } = useLocation();

  return (
    <div className="menu">
      <section>
        {routeCategories.map(({ name, ...rest }, i) => (
          <Fragment key={`nav_${i}`}>
            {"paths" in rest ? (
              <>
                <section>
                  <h3
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {name}
                  </h3>

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
                          className={`link${
                            pathname === `/${path}` ? " selected" : ``
                          }`}
                          to={`/${path}`}
                        >
                          {nameFromRoute(path)}
                        </Link>
                      ))}
                    </Fragment>
                  ))}
                </section>
              </>
            ) : (
              <>
                <Link
                  className={`link lg${
                    pathname === `/${rest.path}` ? ` selected` : ``
                  }`}
                  to={`/${rest.path}`}
                >
                  {nameFromRoute(rest.path)}
                </Link>
              </>
            )}
            <Separator />
          </Fragment>
        ))}
      </section>
    </div>
  );
};
