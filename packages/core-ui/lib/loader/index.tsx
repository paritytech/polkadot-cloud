/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { LoaderProps } from "../core/types";
import "./index.scss";

export const Loader = ({ type, text }: LoaderProps) => {
  switch (type) {
    case "cube":
      return (
        <div className="stage">
          <div className="scene">
            <div className="shadow"></div>
            <div className="jumper">
              <div className="spinner">
                <div className="scaler">
                  <div className="loader">
                    <div className="cuboid">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "dots":
      return (
        <div className="dot_loading">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      );
    case "line":
    default:
      return (
        <div className="line_loading">
          <p>{text}</p>
          <span></span>
        </div>
      );
  }
};
