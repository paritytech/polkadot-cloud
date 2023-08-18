/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Fragment, Dispatch, SetStateAction } from "react";
import { ReactComponent as IconSVG } from "../svg/icon.svg";
import { useGlitch } from "react-powerglitch";
import { Separator } from "@packages/cloud-react/lib/core/Separator";
import { Link } from "react-router-dom";
import { nameFromRoute, routeCategories } from "../config/routes";

interface SideMenuProps {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  component: string;
  setComponent: Dispatch<SetStateAction<string>>;
}

export const SideMenu = ({
  mode,
  setMode,
  theme,
  setTheme,
  component,
  setComponent,
}: SideMenuProps) => {
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
          onClick={() => setMode("light")}
        >
          Light
        </button>
        <button
          className={mode === "dark" ? "selected" : undefined}
          onClick={() => setMode("dark")}
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
                      <h5>{heading}</h5>

                      {paths.map((path, k) => (
                        <Link
                          key={`nav_${i}_heading_${j}_path_${k}`}
                          className={
                            component === path ? "selected" : undefined
                          }
                          onClick={() => setComponent(path)}
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
                  className={`lg${component === rest.path ? ` selected` : ``}`}
                  onClick={() => setComponent(rest.path)}
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
