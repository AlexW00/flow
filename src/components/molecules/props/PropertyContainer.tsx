import React from "react";
import { max } from "src/styles/layout";

export type PropertyContainerProps = {
  name?: string;
  children: React.ReactNode;
};

export const PropertyContainerComponent = ({
  name,
  children,
}: PropertyContainerProps): JSX.Element => {
  return (
    <div style={max}>
      {name && <label>{name}</label>}
      {children}
    </div>
  );
};
