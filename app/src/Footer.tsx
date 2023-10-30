// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconSVG from "./svg/icon-filled.svg?react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="app-footer">
      <section>
        <IconSVG className="icon" />
        <div>
          <div className="beta">Beta</div>
        </div>
        <div>
          <h4>
            &copy; Copyright {new Date().getUTCFullYear()} &nbsp;
            <span>Polkadot Cloud Authors & Contributors.</span>
          </h4>
        </div>{" "}
        <div>
          <h4 className="license">
            Licensed with{" "}
            <a
              href="https://spdx.org/licenses/GPL-3.0-only.html"
              target="_blank"
              rel="noreferrer"
            >
              GPL-3.0-only
            </a>
          </h4>
        </div>
      </section>
      <section>
        <h4>
          <a
            href="https://github.com/paritytech/polkadot-cloud"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            &nbsp; GitHub
          </a>
        </h4>
      </section>
    </div>
  );
};
