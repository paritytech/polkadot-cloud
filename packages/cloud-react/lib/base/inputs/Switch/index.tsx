import "@polkadot-cloud/core/css/base/inputs/Switch/index.css";
import { ComponentBaseWithClassName } from "../../../types";
import { useState, useEffect } from "react";
import { valEmpty } from "../../../utils";

export type SwitchPrimaryProps = ComponentBaseWithClassName & {
  type?: "primary" | "secondary" | "mono" | "monoInvert";
  size?: "sm" | "lg" | "xl";
  onColor?: string;
  isOn?: boolean;
  disabled?: boolean;
  handleToggle?: () => void;
};

export const Switch = ({
  type = "primary",
  size,
  isOn = true,
  disabled,
  handleToggle,
  onColor,
  className,
}: SwitchPrimaryProps) => {
  const [switchOn, setSwitchOn] = useState<boolean>(isOn);
  const [bgColor, setBgColor] = useState<string>("");
  const [buttonColor, setButtonColor] = useState<string>("");
  const [borderColor, setBorderColor] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case "secondary": {
        if (disabled) {
          setBgColor("grey");
          setBorderColor("#cbcbcb");
          setButtonColor("#cbcbcb");
          break;
        }
        setButtonColor("var(--text-color-invert)");
        setBorderColor("var(--border-secondary-color)");
        if (!switchOn) {
          setBgColor("var(--background-invert)");
        } else {
          setBgColor("var(--accent-color-secondary)");
        }
        break;
      }
      case "monoInvert": {
        if (disabled) {
          setBgColor("grey");
          setBorderColor("#ccc");
          setButtonColor("#ccc");
          break;
        }
        setButtonColor("var(--text-color-primary)");
        setBorderColor("var(--background-invert)");
        if (!switchOn) {
          setBgColor("var(--text-color-tertiary)");
        } else {
          setBgColor("var(--text-color-invert)");
        }
        break;
      }
      case "mono": {
        if (disabled) {
          setBgColor("#ccc");
          setBorderColor("#ccc");
          setButtonColor("grey");
          break;
        }
        setButtonColor("var(--text-color-invert)");
        setBorderColor("var(--border-primary-color)");
        if (!switchOn) {
          setBgColor("var(--text-color-tertiary)");
        } else {
          setBgColor("var(--text-color-primary)");
        }
        break;
      }
      case "primary":
      default: {
        if (disabled) {
          setBgColor("grey");
          setBorderColor("#cbcbcb");
          setButtonColor("#cbcbcb");
          break;
        }
        setButtonColor("var(--text-color-invert)");
        setBorderColor("var(--border-primary-color)");
        if (!switchOn) {
          setBgColor("var(--background-invert)");
        } else {
          setBgColor("var(--accent-color-primary)");
        }
      }
    }
  }, [disabled, type, switchOn, onColor]);

  return (
    <>
      <label
        style={{ background: bgColor, border: `1px solid ${borderColor}` }}
        className={`base-inputs-switch-label ${valEmpty(size, size)} ${valEmpty(
          className,
          className
        )} ${disabled ? `is-disabled` : `is-enabled`}`}
      >
        <input
          disabled={disabled}
          onChange={() => {
            if (!disabled) {
              setSwitchOn(!switchOn);
              handleToggle();
            }
          }}
          checked={switchOn}
          className="base-inputs-switch-checkbox"
          type="checkbox"
        />
        <span
          style={{ backgroundColor: buttonColor }}
          className={`base-inputs-switch-button ${valEmpty(size, size)} ${
            disabled ? `is-disabled` : ``
          } is-clicked${switchOn ? `` : `-not`}`}
        />
      </label>
    </>
  );
};
