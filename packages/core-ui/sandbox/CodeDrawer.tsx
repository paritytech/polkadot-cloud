import React, { ReactElement, useState } from "react";

interface CodeDrawerProps {
  finalHeight?: number;
  label: string;
  children: ReactElement | string;
}

export const CodeDrawer = ({
  label,
  finalHeight = 200,
  children,
}: CodeDrawerProps) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <>
      <div
        onClick={toggle}
        className={`title ${open ? "title-show" : "title-hide"}`}
      >
        <h4>{label}</h4>
      </div>
      <div
        style={{ height: open ? finalHeight + "px" || "200px" : "0px" }}
        className={open ? "content-show" : "content-hide"}
      >
        <div className="content"> {children} </div>
      </div>
    </>
  );
};
