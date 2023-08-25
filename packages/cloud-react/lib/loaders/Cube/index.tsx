/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import "@polkadot-cloud/core/css/loaders/Cube/index.css";

export const Cube = () => {
  return (
    <div className="loader-cube-stage">
      <div className="scene">
        <div className="shadow"></div>
        <div className="jumper">
          <div className="spinner">
            <div className="scaler">
              <div className="loader">
                <div className="cuboid">
                  <div className="cuboid-side"></div>
                  <div className="cuboid-side"></div>
                  <div className="cuboid-side"></div>
                  <div className="cuboid-side"></div>
                  <div className="cuboid-side"></div>
                  <div className="cuboid-side"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
