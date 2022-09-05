import React from "react";

export interface BodyInterfaceProps {
  children: React.ReactNode;
}

/**
 * An element that wraps the entire window, houses `SideInterface` and `BodyInterface`.
 */
export const BodyInterface = (props: BodyInterfaceProps) => {
  return (
    <div className="box-border flex flex-auto flex-row relative ">
      {props.children}
    </div>
  );
};
