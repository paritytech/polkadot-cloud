import React from "react";

// A generic type to handle React components. We assume the component may have
// children and styling applied to it.
export interface StyledComponentInterface {
  // passing react children.
  children?: React.ReactNode;
  // passing custom styling.
  style?: React.CSSProperties;
}

// Common button props, applied to all buttons
export interface CommonButtonInterface {
  // whether the button is disabled.
  disabled?: boolean;
  // include a left margin
  marginLeft?: boolean;
  // include a right margin.
  marginRight?: boolean;
  // include x margin around button.
  marginX?: boolean;
}
