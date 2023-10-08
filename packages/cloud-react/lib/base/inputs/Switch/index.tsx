import "@polkadot-cloud/core/css/base/inputs/Switch/index.css";
import { ComponentBaseWithClassName } from "../../../utils/types";
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
          setBorderColor("#CBCBCB");
          setButtonColor("#CBCBCB");
          break;
        }
        setBorderColor("var(--border-secondary-color)");
        if (!switchOn) {
          setButtonColor("var(--accent-color-secondary)");
          setBgColor("var(--background-invert)");
        } else {
          setButtonColor("#FFFFFF");
          setBgColor("var(--accent-color-secondary)");
        }
        break;
      }
      case "monoInvert": {
        setBorderColor("#CCCCCC");
        if (disabled) {
          setBgColor("grey");
          setButtonColor("#CCCCCC");
          break;
        }
        if (!switchOn) {
          setButtonColor("#000000");
          setBgColor("var(--text-color-invert)");
        } else {
          setButtonColor("#000000");
          setBgColor("var(--text-color-tertiary)");
        }
        break;
      }
      case "mono": {
        if (disabled) {
          setBgColor("#CCCCCC");
          setBorderColor("#CCCCCC");
          setButtonColor("grey");
          break;
        }
        setBorderColor("var(--border-primary-color)");
        if (!switchOn) {
          setButtonColor("#FFFFFF");
          setBgColor("var(--text-color-tertiary)");
        } else {
          setButtonColor("#FFFFFF");
          setBgColor("var(--text-color-primary)");
        }
        break;
      }
      case "primary":
      default: {
        if (disabled) {
          setBgColor("grey");
          setBorderColor("#CBCBCB");
          setButtonColor("#CBCBCB");
          break;
        }
        setBorderColor("var(--border-primary-color)");
        if (!switchOn) {
          setButtonColor("var(--accent-color-primary)");
          setBgColor("var(--background-invert)");
        } else {
          setButtonColor("#FFFFFF");
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
