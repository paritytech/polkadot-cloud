// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconSVG from "./svg/icon.svg?react";
import { useGlitch } from "react-powerglitch";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "./contexts/Theme";
import pkg from "../../package.json";

export const Header = () => {
  const { mode, toggleMode } = useTheme();

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

  return (
    <div className="app-header">
      <section>
        <div className="icon" ref={glitch.ref}>
          <IconSVG />
        </div>
        <div className="title">
          <h3>Polkadot Cloud Docs</h3>
          <p>v{pkg?.version}-beta</p>
        </div>
      </section>
      <section>
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
        <a
          href="https://github.com/paritytech/polkadot-cloud"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            transform="grow-14"
            style={{ marginLeft: "0.75rem" }}
          />
        </a>
      </section>
    </div>
  );
};
