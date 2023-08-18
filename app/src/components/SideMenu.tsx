/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Dispatch, SetStateAction } from "react";
import { ReactComponent as IconSVG } from "../svg/icon.svg";
import { useGlitch } from "react-powerglitch";
import { Separator } from "@packages/cloud-react/lib/core/Separator";
import { Link } from "react-router-dom";

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
        <h3>Core UI</h3>
        <section>
          <h5>Layout</h5>
          <Link
            className={component === "grid" ? "selected" : undefined}
            onClick={() => setComponent("grid")}
            to="grid"
          >
            Grid
          </Link>

          <Link
            className={component === "modal" ? "selected" : undefined}
            onClick={() => setComponent("modal")}
            to="/modal"
          >
            Modal
          </Link>
          <Link
            className={component === "card" ? "selected" : undefined}
            onClick={() => setComponent("card")}
            to="/card"
          >
            Card
          </Link>
          <h5>Interaction</h5>
          <Link
            className={`${component === "buttons" ? ` selected` : ``}`}
            onClick={() => setComponent("buttons")}
            to="/buttons"
          >
            Buttons
          </Link>
        </section>
        <section>
          <h5>Standalone</h5>
          <Link
            className={`lg${component === "loader" ? ` selected` : ``}`}
            onClick={() => setComponent("loader")}
            to="/loader"
          >
            Loaders
          </Link>
          <Link
            className={`lg${component === "extensions" ? ` selected` : ``}`}
            onClick={() => setComponent("extensions")}
            to="/extensions"
          >
            Extensions
          </Link>
        </section>
      </section>
    </div>
  );
};
