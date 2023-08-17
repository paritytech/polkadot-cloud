/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Dispatch, SetStateAction } from "react";
import { ReactComponent as IconSVG } from "../svg/icon.svg";
import { useGlitch } from "react-powerglitch";
import { Separator } from "@packages/cloud-react/lib/core/Separator";

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
          <a
            className={component === "grid" ? "selected" : undefined}
            onClick={() => setComponent("grid")}
            href={"/grid"}
          >
            Grid
          </a>

          <a
            className={component === "modal" ? "selected" : undefined}
            onClick={() => setComponent("modal")}
            href={"/modal"}
          >
            Modal
          </a>
          <a
            className={component === "card" ? "selected" : undefined}
            onClick={() => setComponent("card")}
            href={"/card"}
          >
            Card
          </a>
          <h5>Interaction</h5>
          <a
            className={`${component === "buttons" ? ` selected` : ``}`}
            onClick={() => setComponent("buttons")}
            href={"/buttons"}
          >
            Buttons
          </a>
        </section>
        <section>
          <h5>Standalone</h5>
          <a
            className={`lg${component === "loader" ? ` selected` : ``}`}
            onClick={() => setComponent("loader")}
            href={"/loader"}
          >
            Loaders
          </a>
          <a
            className={`lg${component === "extensions" ? ` selected` : ``}`}
            onClick={() => setComponent("extensions")}
            href={"/extensions"}
          >
            Extensions
          </a>
        </section>
      </section>
    </div>
  );
};
