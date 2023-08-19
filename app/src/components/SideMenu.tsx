/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Fragment } from "react";
import { ReactComponent as IconSVG } from "../svg/icon.svg";
import { useGlitch } from "react-powerglitch";
import { Separator } from "@packages/cloud-react/lib/core/Separator";
import { Link, useLocation } from "react-router-dom";
import { nameFromRoute, routeCategories } from "../config/routes";
import { useTheme } from "../contexts/Theme";

export const SideMenu = () => {
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
            className={theme === key ? "selected" : undefined}
            onClick={() => setTheme(key)}
          >
            {name}
          </button>
        ))}

        <h5>Mode</h5>
        <button
          className={mode === "light" ? "selected" : undefined}
          onClick={() => toggleMode("light")}
        >
          Light
        </button>
        <button
          className={mode === "dark" ? "selected" : undefined}
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
                  <h3>{name}</h3>

                  {rest.paths.map(({ heading, paths }, j) => (
                    <Fragment key={`nav_${i}_heading_${j}`}>
                      {heading ? (
                        <h5>{heading}</h5>
                      ) : (
                        <div className="no-heading" />
                      )}

                      {paths.map((path, k) => (
                        <Link
                          key={`nav_${i}_heading_${j}_path_${k}`}
                          className={
                            pathname === `/${path}` ? "selected" : undefined
                          }
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
                  className={`lg${
                    pathname === `/${rest.path}` ? ` selected` : ``
                  }`}
                  to={`/${rest.path}`}
                >
                  {name}
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
