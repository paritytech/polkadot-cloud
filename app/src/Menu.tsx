/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Fragment } from "react";
import { ReactComponent as IconSVG } from "./svg/icon.svg";
import { useGlitch } from "react-powerglitch";
import { Separator } from "@packages/cloud-react/lib/base/structure/Separator";
import { Link, useLocation } from "react-router-dom";
import { nameFromRoute, routeCategories } from "./config/routes";
import { useTheme } from "./contexts/Theme";

export const Menu = () => {
  const { pathname } = useLocation();
  const { mode, toggleMode, theme, setTheme } = useTheme();

  const glitch = useGlitch({
    timing: {
      duration: 5000,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.65,
    },
    shake: {
      velocity: 2,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
  });

  const themes = [
    ["Polkadot", "polkadot-relay"],
    ["Kusama", "kusama-relay"],
    ["Westend", "westend-relay"],
    ["XCM", "xcm"],
  ];

  return (
    <div className="menu">
      <div className="icon" ref={glitch.ref}>
        <IconSVG />
      </div>
      <section>
        <h5>Theme</h5>
        {themes.map(([name, key]) => (
          <button
            key={`theme_${key}`}
            className={`link${theme === key ? " selected" : ``}`}
            onClick={() => setTheme(key)}
          >
            {name}
          </button>
        ))}

        <h5>Mode</h5>
        <button
          className={`link${mode === "light" ? " selected" : ``}`}
          onClick={() => toggleMode("light")}
        >
          Light
        </button>
        <button
          className={`link${mode === "dark" ? " selected" : ``}`}
          onClick={() => toggleMode("dark")}
        >
          Dark
        </button>
        <Separator />
      </section>
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
