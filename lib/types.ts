import React from "react";

// A generic type to handle React components. We assume the component may have
// children and styling applied to it.
export interface StyledComponentInterface {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
