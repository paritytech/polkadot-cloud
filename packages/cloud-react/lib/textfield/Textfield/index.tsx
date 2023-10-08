/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBaseWithClassName } from "../../utils/types";
import { capitalizeFirstLetter } from "@polkadot-cloud/utils";
import { valOr } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

import "@polkadot-cloud/core/css/textfield/index.css";

type TextfieldProps = ComponentBaseWithClassName & {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  name?: string;
  inputType?: "email" | "password" | "text";
  iconLeft?: {
    icon: IconProp | IconDefinition;
    iconTransform?: string;
    action?: () => void;
  };
  iconRight?: {
    icon: IconProp | IconDefinition;
    iconTransform?: string;
    action?: () => void;
  };
};

export const Textfield = ({
  onChange,
  className,
  placeholder,
  autoFocus,
  name,
  disabled,
  inputType = "text",
  value,
  iconLeft,
  iconRight,
}: TextfieldProps) => {
  return (
    <div
      className="outer"
      style={{
        borderRadius: "10rem",
        width: "100%",
        border: "0.2rem solid var(--border-primary-color)",
        color: "var(--text-color-secondary)",
      }}
    >
      {iconLeft ? (
        <FontAwesomeIcon
          icon={iconLeft.icon}
          className={`icon-left ${iconLeft?.action ? "icon-action" : null}`}
          transform={valOr(
            iconLeft.iconTransform,
            iconLeft.iconTransform,
            undefined
          )}
          onClick={iconLeft.action}
        />
      ) : null}
      <input
        style={{ color: "var(--text-color-secondary)", padding: "0.5rem 1rem" }}
        disabled={disabled}
        className={`input ${className ? ` ${className}` : ""}`}
        onChange={({ target }) => onChange(target?.value)}
        type={inputType}
        placeholder={placeholder && capitalizeFirstLetter(placeholder)}
        autoFocus={autoFocus}
        name={name}
        value={value}
      />
      {iconRight ? (
        <FontAwesomeIcon
          icon={iconRight.icon}
          className={`icon-right ${iconRight?.action ? "icon-action" : null}`}
          transform={valOr(
            iconRight.iconTransform,
            iconRight.iconTransform,
            undefined
          )}
          onClick={iconRight.action}
        />
      ) : null}
    </div>
  );
};
