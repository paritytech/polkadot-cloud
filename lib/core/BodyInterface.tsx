import React from "react";
import { StyledComponentInterface } from "../types";

export type BodyInterfaceProps = StyledComponentInterface;

/**
 * An element that wraps the entire window, houses `SideInterface` and `BodyInterface`.
 */
export const BodyInterface = ({ style, children }: BodyInterfaceProps) => (
  <div className="box-border flex flex-auto flex-row relative" style={style}>
    {children}
  </div>
);
