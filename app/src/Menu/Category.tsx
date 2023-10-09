/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  RouteCategoryMulti,
  nameFromRoute,
  isDefaultRoute,
} from "../config/routes";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useUi } from "../contexts/UI";
interface Props {
  name: string;
  rest: RouteCategoryMulti;
  i: number;
}

export const Category = ({ rest, name, i }: Props) => {
  const { setSideMenu } = useUi();
  const { pathname } = useLocation();
  const initial = name !== "Experimental";

  const [open, setOpen] = useState<boolean>(initial);

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <h3>
          <FontAwesomeIcon
            icon={open ? faChevronDown : faChevronRight}
            transform={"shrink-5"}
          />{" "}
          {name}
        </h3>
      </button>

      <motion.section
        initial={initial ? "show" : "hidden"}
        animate={open ? "show" : "hidden"}
        variants={{
          hidden: { height: 0 },
          show: {
            height: "auto",
          },
        }}
        transition={{
          ease: [0.1, 1, 0.1, 1],
        }}
      >
        {rest.paths.map(({ heading, paths }, j) => (
          <Fragment key={`nav_${i}_heading_${j}`}>
            {heading ? (
              <h4>
                <FontAwesomeIcon icon={faCircle} transform="shrink-6" />{" "}
                {heading}
              </h4>
            ) : null}

            {paths.map((path, k) => (
              <Link
                key={`nav_${i}_heading_${j}_path_${k}`}
                className={`link ${heading ? " group" : ""} ${
                  pathname === `/${path}` ||
                  (pathname === "/" && isDefaultRoute(path))
                    ? " selected"
                    : ``
                }`}
                to={`${path}`}
                onClick={() => setSideMenu(false)}
              >
                {nameFromRoute(path)}
              </Link>
            ))}
          </Fragment>
        ))}
      </motion.section>
    </>
  );
};
