/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ButtonMonoInvert } from "../buttons/ButtonMonoInvert";
import { ComponentBase } from "../types";
import { motion } from "framer-motion";
import { ButtonPrimaryInvert } from "../buttons/ButtonPrimaryInvert";
import { FunctionComponent, SVGProps } from "react";
import { ButtonHelp } from "../buttons/ButtonHelp";

export type HardwareStatusBarProps = ComponentBase & {
  // help key and handler related to current status.
  help?: {
    // help key to display.
    helpKey: string;
    // handle help click.
    handleHelp: (key: string) => void;
  };
  // whether import process is in progress.
  inProgress: boolean;
  // text to display.
  text: string;
  // icon to display.
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  // handle cancel import.
  handleCancel?: () => void;
  // handle finish import.
  handleDone?: () => void;
  // required component translations.
  t: {
    tDone: string;
    tCancel: string;
  };
};

/**
 * @name HardwareStatusBar
 * @description A status bar for hardware wallet import process.
 */
export const HardwareStatusBar = ({
  handleCancel,
  handleDone,
  help,
  Icon,
  inProgress,
  style,
  t: { tDone, tCancel },
  text,
}: HardwareStatusBarProps) => {
  const { helpKey, handleHelp } = help || {};

  return (
    <motion.div
      style={style}
      className="hardware-status-bar"
      initial="hidden"
      animate="show"
      variants={{
        hidden: { bottom: -50 },
        show: {
          bottom: 0,
          transition: {
            staggerChildren: 0.01,
          },
        },
      }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: 0.4,
      }}
    >
      <div className="inner">
        <section>
          <Icon width="24" height="24" className="icon" />
          <div className="text">
            <h3>
              {text}
              {help && (
                <ButtonHelp
                  marginLeft
                  onClick={() => {
                    if (typeof handleHelp === "function") {
                      handleHelp(helpKey);
                    }
                  }}
                  backgroundSecondary
                />
              )}
            </h3>
          </div>
        </section>
        <section>
          {inProgress ? (
            <ButtonMonoInvert
              text={tCancel}
              onClick={() =>
                typeof handleCancel === "function" && handleCancel()
              }
            />
          ) : (
            <ButtonPrimaryInvert
              text={tDone}
              onClick={() => {
                if (typeof handleDone === "function") {
                  handleDone();
                }
              }}
            />
          )}
        </section>
      </div>
    </motion.div>
  );
};
