/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RouteCategoryMulti, nameFromRoute } from "../config/routes";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
interface Props {
  name: string;
  rest: RouteCategoryMulti;
  i: number;
}

export const Category = ({ rest, name, i }: Props) => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState<boolean>(true);

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
        initial="show"
        animate={open ? "show" : "hidden"}
        variants={{
          hidden: { height: 0 },
          show: {
            transition: {
              staggerChildren: 0.01,
            },
          },
        }}
        transition={{
          duration: 0.3,
          type: "spring",
        }}
      >
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
      </motion.section>
    </>
  );
};
