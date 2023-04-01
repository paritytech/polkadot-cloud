import { ReactElement, useState } from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CodeDrawerProps {
  children: ReactElement;
}

export const CodeDrawer = ({ children }: CodeDrawerProps) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <>
      <button onClick={toggle}>
        <FontAwesomeIcon icon={faCode} transform="shrink-3" />
      </button>
      <div
        className="code"
        style={{
          borderColor: open
            ? "var(--border-primary-color)"
            : "var(--transparent-color)",
        }}
      >
        <div className={`${open ? `show` : `hide`}`}>{children}</div>
      </div>
    </>
  );
};
